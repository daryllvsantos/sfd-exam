<template>
  <main>
    <div class="container">
      <div class="section-top">
        <label class="switch">
          <small class="supplier">
            <i class="fas fa-people-carry"></i> By Supplier
          </small>
          <small class="product">
            <i class="fas fa-boxes"></i> By Product
          </small>
          <input id="slider-on" type="checkbox" />
          <span class="slider round"></span>
        </label>
        <button class="smart-plan">
          <i class="far fa-lightbulb"></i>Hexie smart combo plan
        </button>
      </div>
      <div
        v-for="customer in customers"
        :key="customer.customer_id"
        class="section-table"
      >
        <div class="tbl-data">
          <div class="section-info customer">
            Quote from
            <strong class="cusName">{{ customer.name }}</strong>
            <!-- <span v-bind:class="{'isAcreddited':customer.accredited}">
              <i class="fas fa-star"></i> Acreddited
            </span>-->
            <span v-if="customer.accredited" class="badge isAccredited">
              <i class="fas fa-star"></i> Accredited
            </span>
            <span v-else class="badge notAccredited">Not Accredited</span>
          </div>
          <div class="section-info status">
            <small>Status</small>
            <br />
            <span v-if="customer.status_received" class="badge isReceived">
              <i class="fas fa-circle"></i> Received Quote
            </span>
            <span v-else class="badge notReceived">
              <i class="fas fa-circle"></i> Not Received Quote
            </span>
          </div>
          <div class="section-info date-sent">
            <small>Date sent</small>
            <br />
            <span>{{ customer.date_sent }}</span>
          </div>
          <div class="section-info date-recieved">
            <small>Date recieved</small>
            <br />
            <span v-if="customer.status_received">{{
              customer.date_received
            }}</span>
            <span v-else>N/A</span>
          </div>
        </div>
        <QuoteTable
          v-bind:quotes="quotes"
          v-bind:customer_id="customer.customer_id"
          v-on:cancel-quote="cancelQuote"
        />
      </div>
    </div>
  </main>
</template>
<script>
import QuoteTable from "./QuoteTable";
export default {
  name: "CustomerQuote",
  props: ["customers"],
  components: { QuoteTable },
  data() {
    return {
      quotes: [
        {
          quote_ref: "474733-1",
          customer_id: 1,
          quote_desc: "This is order 1",
          quote_items: [
            {
              quote_id: "001",
              pid: "H-2734",
              quantity: 50,
              lastbest: 150
            },
            {
              quote_id: "002",
              pid: "H-5927",
              quantity: 120,
              lastbest: 550
            },
            {
              quote_id: "003",
              pid: "S-2789",
              quantity: 1000,
              lastbest: 1.75
            }
          ],
          buy_total: 56800,
          sell_total: 85750
        },
        {
          quote_ref: "474733-2",
          customer_id: 2,
          quote_desc: "This is order 2",
          quote_items: [
            {
              quote_id: "004",
              pid: "H-4791",
              quantity: 700,
              lastbest: 74
            }
          ],
          buy_total: 51100,
          sell_total: 61600
        }
      ]
    };
  },
  methods: {
    cancelQuote(id) {
      this.quotes = this.quotes.filter(quote => quote.customer_id !== id);
    }
  }
};
</script>

<style scoped>
/****************************************************
Slider Button
*****************************************************/

.switch {
  position: relative;
  display: inline-block;
  width: 240px;
  height: 44px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f3f3f4;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 36px;
  width: 50%;
  left: 4px;
  bottom: 4px;
  background-color: #007bff;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

input:checked + .slider:before {
  -webkit-transform: translateX(112px);
  -ms-transform: translateX(112px);
  transform: translateX(112px);
}

.slider.round,
.slider.round:before {
  border-radius: 34px;
}
.switch small {
  z-index: 99;
  position: absolute;
  cursor: pointer;

  top: 12px;
}
.switch svg {
  font-size: 15px;
}
.switch small.supplier {
  color: #fff;
  left: 16px;
}
.switch small.product {
  color: #7d7d7d;
  right: 16px;
}
/****************************************************
Section Top
*****************************************************/
div.section-top {
  margin-bottom: 40px;
}
button.smart-plan {
  float: right;
  width: 240px;
  height: 44px;
  border-radius: 5px;
  background-color: #593ec2;
  color: #fff;
  border: none;
  cursor: pointer;
  outline: none;
}
.section-table {
  border: 1px solid #e4e4e4;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 40px;
}
.tbl-data {
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  display: table;
  margin-bottom: 40px;
  border-bottom: 1px solid #e4e4e4;
  border-radius: 0;
  padding-bottom: 10px;
}
.section-info {
  width: 15%;
  position: relative;
  color: #333;
  font-size: 24px;
  display: table-cell;
  vertical-align: middle;
}
.section-info.customer {
  width: 55%;
  padding-left: 20px;
}
.section-info.customer::before {
  content: "";
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #333333;
  position: absolute;
  left: 5px;
  top: 32px;
}
.section-info small {
  font-size: 13px;
  font-weight: bold;
  color: #7d7d7d;
}
.section-info span {
  font-size: 15px;
  font-weight: 600;
}
/*********************************************
Customer Section
*********************************************/
.cusName {
  margin-right: 15px;
}
.isAccredited {
  color: #fff;
  background: #593ec2;
}
.notAccredited {
  color: #fff;
  background: #dc3545;
}
.isReceived svg {
  color: #007bff;
  font-size: 12px;
  margin-bottom: 2px;
}
.notReceived svg {
  color: #dc3545;
  font-size: 12px;
  margin-bottom: 2px;
}
</style>
