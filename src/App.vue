<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <Header />
    <CustomerQuote v-bind:customers="customers" />
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import CustomerQuote from "./components/CustomerQuote";

export default {
  name: "App",
  components: { Header, CustomerQuote },
  data() {
    return {
      customers: [
        {
          customer_id: 1,
          name: "Honest Buildings",
          status_received: true,
          date_sent: "July 14 5:45 AM",
          date_received: "July 17 11:30 PM",
          accredited: true
        },
        {
          customer_id: 2,
          name: "Richie and Sons",
          status_received: false,
          date_sent: "July 14 5:45 AM",
          date_received: "July 15 9:18 AM",
          accredited: false
        }
      ]
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  font-family: "Segoe UI", Times, serif;
  margin: 0;
  padding: 0;
}
header {
  margin: 10px 0 40px;
}
main {
  padding: 0 40px 0;
}
svg {
  margin-right: 5px;
}
div {
  box-sizing: border-box;
}
table {
  width: 100%;
}
.badge {
  color: #333;
  padding: 5px 7px;
  border-radius: 25px;
  background: #fff;
  font-size: 12px;
  font-weight: 600;
}
label.percentage {
  display: block;
  background: #28a745;
  border-radius: 5px;
  font-size: 18px;
  padding-left: 10px;
  overflow: hidden;
  color: #fff;
  width: 70%;
}
label.percentage.below {
  background: #f7941d;
}
label.percentage span.per {
  line-height: 1.9;
}
label.percentage span.smile {
  float: right;
  font-size: 26px;
  display: block;
  background: #218939;
  margin: 0;
  padding-left: 6px;
}
label.percentage.below span.smile {
  background: #cb7a18;
}
</style>
