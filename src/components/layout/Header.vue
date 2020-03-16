<template>
  <header>
    <nav class="navigation-top">
      <ul>
        <li>
          <a href=""><i class="far fa-eye"></i> Overview</a>
        </li>
        <li>
          <a href=""><i class="fas fa-box"></i> Products</a>
        </li>
        <li class="active">
          <a href=""><i class="fas fa-hand-holding-usd"></i>Purchasing</a>
        </li>
        <li>
          <a href=""><i class="far fa-calendar-alt"></i>Schedule</a>
        </li>
        <li>
          <a href=""><i class="far fa-comment-alt"></i> Messages</a>
        </li>
      </ul>
    </nav>
    <nav class="navigation-bottom">
      <ul>
        <li><a href="">New quote request</a></li>
        <li class="active"><a href="">Requested quotes</a></li>
        <li><a href="">Accepted quotes</a></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style scoped>
/****************************************************
Navigation Top
*****************************************************/
.navigation-top {
  width: 100%;
  position: relative;
  display: block;
  overflow: hidden;
}
.navigation-top ul {
  width: 100%;
  display: block;
  margin: 0 auto;
  padding: 10px 0;
}
.navigation-top ul li {
  display: inline-block;
  overflow: hidden;
  text-align: center;
  width: 11.5%;
  box-sizing: border-box;
  padding: 0 48px 0px;
}
.navigation-top ul li a {
  display: inline-block;
  width: 100%;
  text-decoration: none;
  color: #333333;
  font-weight: 500;
  padding-bottom: 3px;
  border-bottom: 4px solid transparent;
}
.navigation-top ul li a {
  color: #333333;
  font-size: 18px;
}
.navigation-top ul li.active a,
.navigation-top ul li a:hover {
  border-bottom: 4px solid #593ec2;
}

/****************************************************
Navigation Bottom
*****************************************************/
.navigation-bottom {
  width: 100%;
  position: relative;
  display: block;
  background: #f3f3f4;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
}
.navigation-bottom ul {
  width: 100%;
  display: block;
  margin: 0 auto;
  padding: 10px 0;
  position: relative;
}
.navigation-bottom ul li {
  display: inline-block;
  text-align: center;
  width: 12%;
  box-sizing: border-box;
  padding: 0 20px 0px;
  position: relative;
}
.navigation-bottom ul li a {
  display: inline-block;
  width: 100%;
  text-decoration: none;
  color: #7d7d7d;
  font-weight: 500;
}
.navigation-bottom ul li.active a,
.navigation-bottom ul li a:hover {
  color: #333333;
}
.navigation-bottom ul li.active::after {
  content: "";
  border: solid #e4e4e4;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  width: 6px;
  height: 6px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  bottom: -17px;
  position: absolute;
  left: 109px;
  z-index: 1;
  background: #fff;
}
</style>
