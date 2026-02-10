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

// Problem-02: OTP Validation for Zapshift

function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  }
  if (otp.length === 8 && otp.startsWith("ph-")) {
    return true;
  } else {
    return false;
  }
}

// console.log(validOtp("ph-helle"));
