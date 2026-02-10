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

  return (currentPrice - (discount * currentPrice) / 100).toFixed(3);
}

// console.log(newPrice(55 , 89 ));

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

// Problem-03: BCS Final Score Calculator

function finalScore(omr) {
  const { right, wrong, skip } = omr;
  if (right + wrong + skip !== 100) {
    return "Invalid";
  }

  return Math.round(right - wrong * 0.5);
}

// console.log(finalScore({ right: 50.5, wrong: 10, skip: 39.5 }));

// Problem-04: Upcoming Gono Vote

function gonoVote(votes) {
  if (!Array.isArray(votes)) {
    return "Invalid";
  }

  const count1 = votes.filter((vote) => {
    return vote == "ha";
  }).length;

  const count2 = votes.filter((vote) => {
    return vote == "na";
  }).length;

  if (count1 > count2) {
    return true;
  } else if (count2 > count1) {
    return false;
  } else {
    return "equal";
  }
}

// console.log(gonoVote(["ha"]));

// Problem-05: Text Analyzer for an AI Company

function analyzeText(text) {
  if (typeof text !== "string") {
    return "Invalid";
  }

  let words = text.trim();
  words = words.split(" ");

  let longWord = "";
  let totalToken = 0;
  words.forEach((currentWord) => {
    if (currentWord.length > longWord.length) {
      longWord = currentWord;
    }
    totalToken = totalToken + currentWord.length;
  });
  return { longWord: longWord, totalToken: totalToken };
}

// console.log(analyzeText("I am a little honest person"));
