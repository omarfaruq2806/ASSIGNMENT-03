// Problem-01: New Price for Eid Sale

function newPrice(currentPrice, discount) {
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount < 0 ||
    discount > 100
  ) {
    return "Invalid";
  }

  return currentPrice - (discount * currentPrice) / 100;
}

// console.log(newPrice(1500 , 20 ));
