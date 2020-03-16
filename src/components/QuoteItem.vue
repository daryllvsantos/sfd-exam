<template>
  <tbody>
    <tr v-for="quote_item in quote_items" :key="quote_item.lastbest" class="item_row">
      <td v-for="product in filteredProductQuoteId(quote_item.pid)" :key="product.a">
        <img
          :src="'/product_image/' + product.product_img + '.jpg'"
          v-bind:alt="product.product_img"
        />

        <span class="badge">{{ product.product_id }}</span>
        <p class="product">
          {{ product.product_name }}
          <i class="fas fa-info-circle"></i>
        </p>
        <p class="category">{{ product.category }}</p>
        <p class="category">{{ product.available }}</p>
      </td>
      <td class="quantity">{{ quote_item.quantity }}</td>
      <td
        class="l-yellow"
        v-for="product in filteredProductQuoteId(quote_item.pid)"
        :key="product.i"
      >
        ${{ formatPrice(product.buy_unit_price) }}
        <div class="availablity">
          <span
            v-bind:class="{
              available: product.available >= quote_item.quantity
            }"
          >
            <i v-show="product.available >= quote_item.quantity">Availability: In Stock</i>
            <i v-show="product.available < quote_item.quantity">Availability: Out of Stock</i>
          </span>
        </div>
      </td>
      <td
        class="l-yellow"
        v-for="product in filteredProductQuoteId(quote_item.pid)"
        :key="product.sell_unit_price"
      >
        ${{ formatPrice(product.buy_unit_price * quote_item.quantity) }}
        <div class="availablity">
          <span
            v-bind:class="{
              available: product.available >= quote_item.quantity
            }"
          ></span>
        </div>
      </td>

      <td
        class="l-blue"
        v-for="product in filteredProductQuoteId(quote_item.pid)"
        :key="product.buy_unit_price"
      >
        ${{ formatPrice(product.sell_unit_price) }}
        <div class="lastbest">
          Last best quote:
          <span>${{ formatPrice(quote_item.lastbest) }}</span>
        </div>
      </td>
      <td
        v-for="product in filteredProductQuoteId(quote_item.pid)"
        :key="product.available"
        class="l-blue"
      >
        ${{ formatPrice(product.sell_unit_price * quote_item.quantity) }}
        <div class="lastbest"></div>
      </td>

      <td v-for="product in filteredProductQuoteId(quote_item.pid)" :key="product.product_category">
        <p
          v-if="
            computeMargin(
              product.sell_unit_price,
              product.buy_unit_price,
              quote_item.quantity
            ) > 0
          "
        >
          + ${{
          formatPrice(
          computeMargin(
          product.sell_unit_price,
          product.buy_unit_price,
          quote_item.quantity
          )
          )
          }}
        </p>
        <p v-else>
          ${{
          formatPrice(
          computeMargin(
          product.sell_unit_price,
          product.buy_unit_price,
          quote_item.quantity
          )
          )
          }}
        </p>
        <div class="lastbest"></div>
      </td>
      <td v-for="product in filteredProductQuoteId(quote_item.pid)" :key="product.product_img">
        <label
          class="percentage"
          v-bind:class="{
            below: computePercentage(
              product.sell_unit_price,
              product.buy_unit_price,
              quote_item.quantity
            )
          }"
        >
          <span class="per">
            {{
            formatPrice(
            computePercentageNum(
            product.sell_unit_price,
            product.buy_unit_price,
            quote_item.quantity
            )
            )
            }}%
          </span>
          <span class="smile">
            <i
              v-bind:class="{
                'fas fa-smile': computePercentage(
                  product.sell_unit_price,
                  product.buy_unit_price,
                  quote_item.quantity
                ),
                'fas fa-grin': !computePercentage(
                  product.sell_unit_price,
                  product.buy_unit_price,
                  quote_item.quantity
                )
              }"
            ></i>
          </span>
        </label>
        <div class="lastbest"></div>
      </td>
    </tr>
    <tr class="delivery_info">
      <td>
        <span class="icon_delivery">
          <i class="fas fa-truck"></i>
        </span>
        <span class="badge">Shipping/Fuel</span>
        <p class="product">
          Shipping Cost
          <i class="fas fa-info-circle"></i>
        </p>
      </td>
      <td>1</td>
      <td>-----</td>
      <td>-----</td>
      <td>${{ formatPrice(0) }}</td>
      <td>-----</td>
      <td>-----</td>
      <td>-----</td>
    </tr>
  </tbody>
</template>
<script>
export default {
  name: "QuoteItem",
  props: ["products", "quote_items"],
  methods: {
    filteredProductQuoteId(pid) {
      return this.products.filter(product => product.product_id == pid);
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    computePercentage(x, y, z) {
      return ((x * z - y * z) / (x * z)) * 100 <= 20;
    },
    computePercentageNum(x, y, z) {
      return ((x * z - y * z) / (x * z)) * 100;
    },
    computeMargin(x, y, z) {
      return x * z - y * z;
    }
    // getImgUrl(pet) {
    //   var images = require.context("../assets/", false, /\.png$/);
    //   return images("./" + pet + ".png");
    // }
  }
};
</script>
<style scoped>
td {
  font-weight: 600;
}
tr.item_row td {
  padding: 10px;
  font-weight: 600;
  color: #333333;
  position: relative;
  border-bottom: 1px solid #e4e4e4;
}
.badge {
  border: 1px solid #7d7d7d;
  padding: 0px 10px;
  margin-bottom: 5px;
  display: inline-block;
}
.tbl-quotation td.l-yellow {
  background: #fff6eb;
}
.tbl-quotation td.l-blue {
  background: #e7f3ff;
}
tr.item_row .category {
  font-size: 13px;
  color: #7d7d7d;
}
tr.item_row .quantity {
  font-weight: normal;
}
tr.item_row td img {
  float: left;
  margin-right: 10px;
  border-radius: 5px;
}

div.availablity span {
  background: #dc3545;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  height: 21px;
  padding: 0 10px;
  font-weight: 600;
  font-size: 14px;
}
div.availablity span.available {
  background: #ffc107;
}
div.lastbest {
  position: absolute;
  background: #ffffff;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  height: 21px;
  padding: 0 10px;
  font-weight: 600;
  border-top: 1px solid #e4e4e4;
}
div.lastbest {
  font-weight: 600;
  font-size: 14px;
}
div.lastbest span {
  text-decoration: underline;
}
p.product {
  font-size: 14px;
  color: #7d7d7d;
  font-weight: 600;
}
p.product svg {
  color: #7d7d7d;
  font-size: 16px;
  margin-right: 0;
}
.delivery_info td {
  padding: 10px;
  border-bottom: 1px solid #e4e4e4;
}
.icon_delivery {
  display: block;
  float: left;
  background: #f3f3f4;
  padding: 20px;
  margin-right: 15px;
}
.icon_delivery svg {
  color: #a2a2a2;
  font-size: 25px;
  margin: 0;
}
</style>
