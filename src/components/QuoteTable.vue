<template>
  <div class="table-container">
    <div v-for="quote in filteredQuoteByCusId(customer_id)" :key="quote.quote_name">
      <table class="tbl-quotation">
        <tr>
          <th class="products">Products</th>
          <th>Quantity</th>
          <th class="l-yellow">Buy / Unit</th>
          <th class="l-yellow">Buy / Total</th>

          <!-- <th class="l-yellow">Buy / Total</th> -->
          <th class="l-blue">Sell / Unit</th>
          <th class="l-blue">Sell / Total</th>

          <th>Margin $</th>
          <th>Margin %</th>
        </tr>
        <QuoteItem v-bind:products="products" v-bind:quote_items="quote.quote_items" />
      </table>

      <table class="tbl-totalquote">
        <tr>
          <th>Actions</th>
          <th>Quote reference</th>
          <th>Buy total amount</th>
          <th>Sell total amount</th>
          <th>Margin $</th>
          <th>Margin %</th>
        </tr>
        <tr>
          <td>
            <button class="view_quote">
              <i class="far fa-eye"></i> View quote
            </button>
            <button class="provide">
              <i class="fas fa-hand-holding-usd"></i> Provide as supplier
            </button>
            <button @click="$emit('cancel-quote', quote.customer_id)" class="cancel">
              <i class="fas fa-ban"></i> Cancel
            </button>
          </td>
          <td>#{{ quote.quote_ref }}</td>
          <td>${{ formatPrice(quote.buy_total) }}</td>
          <td>${{ formatPrice(quote.sell_total) }}</td>
          <td>
            <p
              v-if="formatPrice(quote.sell_total - quote.buy_total) < 0"
            >- ${{ formatPrice(quote.sell_total - quote.buy_total) }}</p>
            <p v-else>+ ${{ formatPrice(quote.sell_total - quote.buy_total) }}</p>
          </td>
          <td>
            <label
              class="percentage"
              v-bind:class="{
                below: computePercentage(quote.sell_total, quote.buy_total)
              }"
            >
              <span class="per">
                {{
                formatPrice(
                computePercentageNum(quote.sell_total, quote.buy_total)
                )
                }}%
              </span>
              <span class="smile">
                <i
                  v-bind:class="{
                    'fas fa-smile': computePercentage(
                      quote.sell_total,
                      quote.buy_total
                    ),
                    'fas fa-grin': !computePercentage(
                      quote.sell_total,
                      quote.buy_total
                    )
                  }"
                ></i>
              </span>
            </label>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import QuoteItem from "./QuoteItem";
export default {
  name: "QuoteTable",
  props: ["quotes", "customer_id"],
  components: { QuoteItem },
  data() {
    return {
      products: [
        {
          product_id: "H-2734",
          product_img: "Design_01",
          product_name: "Portable Folding Safety Barrier with Caster",
          category: "Safety Guards/ Barriers",
          available: 50,
          buy_unit_price: 117,
          sell_unit_price: 249
        },
        {
          product_id: "H-5927",
          product_img: "Design_02",
          product_name:
            '4 Drawer/1 Leg Pedestal Workbench - 60 x 30",Maple Top ',
          category: "Workbenches",
          available: 150,
          buy_unit_price: 410,
          sell_unit_price: 590
        },
        {
          product_id: "S-2789",
          product_img: "Design_03",
          product_name: 'Uline Economy Tape - 2.5 Mil, 2" x 110yds, Clear',
          category: "Carton Sealing Tape",
          available: 10,
          buy_unit_price: 1.75,
          sell_unit_price: 2.5
        },
        {
          product_id: "H-4791",
          product_img: "Design_04",
          product_name: 'Portable Floor Plan - 12"',
          category: "Fans, Heaters",
          available: 700,
          buy_unit_price: 73,
          sell_unit_price: 88
        }
      ]
    };
  },
  methods: {
    filteredQuoteByCusId(customer_id) {
      return this.quotes.filter(quote => quote.customer_id === customer_id);
    },
    filteredProductQuoteId(pid) {
      return this.products.filter(product => product.product_id == pid);
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    computePercentage(x, y) {
      return ((x - y) / x) * 100 <= 20;
    },
    computePercentageNum(x, y) {
      return ((x - y) / x) * 100;
    }
  }
};
</script>
<style scoped>
/****************************************************
Section Table
*****************************************************/
.tbl-quotation {
  width: 100%;
  border-spacing: 0;
  padding: 0 10px;
  margin-bottom: 20px;
}
.tbl-quotation th {
  color: #7d7d7d;
  font-size: 14px;
  font-weight: 600;
  width: 10%;
  text-align: left;
  padding: 10px;
  width: 10%;
}
.tbl-quotation th.products {
  width: 30%;
}
.tbl-totalquote {
  width: 100%;
  border-spacing: 0;
}
.tbl-totalquote th {
  background: #f3f3f4;
  border: 1px solid #e4e4e4;
  color: #7d7d7d;
  text-align: left;
  padding: 20px;
}
.tbl-totalquote td {
  padding: 15px;
  border: 1px solid #e4e4e4;
  color: #333;
  font-weight: 600;
}
.tbl-totalquote button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
}
.provide {
  background: #e4e4e4;
  color: #333;
}
.tbl-totalquote .view_quote {
  color: #fff;
  background: #007bff;
}
.tbl-totalquote .cancel {
  background: #fff;
  border: 1px solid #dc3545;
  color: #dc3545;
}
.tbl-totalquote .cancel svg {
  color: #dc3545;
}
.tbl-totalquote .view_quote svg {
  color: #fff;
}
.table-container {
  margin-bottom: 40px;
}
.tbl-quotation th.l-yellow {
  background: #fff6eb;
}
.tbl-quotation th.l-blue {
  background: #e7f3ff;
}
</style>
