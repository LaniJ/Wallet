<template>
  <section class="table-section">
    <div class="table">
      <table class="table__wrapper">
        <thead class="table__header">
          <tr v-for="(header, index) in headers" :key="index">
            <th class="table__header__content">{{ header.row1 }}</th>
            <th class="table__header__content">{{ header.row2 }}</th>
            <th class="table__header__content">{{ header.row3 }}</th>
            <th class="table__header__content">{{ header.row4 }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in transactions" :key="index" class="table__row">
            <td class="table__row__content">{{`Wallet ${row.transaction_type}`}}</td>
            <td class="table__row__content margin">
              {{row.transaction_date}} |
              <span class="time">{{ row.time }}</span>
            </td>
            <td class="table__row__content test">
                <template v-if="row.transaction_status === 'Successful'">
                    <span class="successful">
                        <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle cx="6" cy="6" r="6" fill="white" />
                        <circle cx="6" cy="6" r="3" fill="#1E944D" />
                        </svg>
                        <ul>
                        <li>Successful</li>
                        </ul>
                    </span>
                </template>
                <template v-else>
                    <span class="failed">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" fill="white"/>
                            <circle cx="6" cy="6" r="3" fill="#9D1515"/>
                        </svg>
                        <ul>
                            <li>Failed</li>
                        </ul>
                    </span>
                </template>
            </td>
            <td class="table__row__content">{{`NGN ${row.amount}`}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script src="./Table.js"></script>
<style scoped src="./Table.css"></style>
