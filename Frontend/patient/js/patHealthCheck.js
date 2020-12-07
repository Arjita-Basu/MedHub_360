const url = "http://127.0.0.1:3600";
const url1 = "http://127.0.0.1:5000";
$("#resAlert").hide();

$.ajax({
  url: url + "/user/verify",
  method: "GET",
  crossDomain: true,
  headers: {
    "x-access-token": localStorage.getItem("token"),
  },
  success: function (res) {
    if (res.status !== 200) {
      window.location = "../500.html";
    } else if (res.status === 200) {
      console.log("success");
    }
  },
  error: function (err) {
    console.log(err);
    alert(err);
  },
});

function logout() {
  localStorage.clear();
  window.location = "../index.html";
}

function predictDisease() {
  $("#resAlert").hide();
  var trip = $("#trip").val();
  var fever = $("#fever").val();
  var iteyes = $("#iteyes").val();
  var runnose = $("#runnose").val();
  var trbr = $("#trbr").val();
  var cough = $("#cough").val();

  if (trip == "") return;
  if (fever == "") return;
  if (iteyes == "") return;
  if (runnose == "") return;
  if (trbr == "") return;
  if (cough == "") return;

  $.ajax({
    url: url1 + "/predict",
    method: "POST",
    crossDomain: true,
    data: [trip, fever, iteyes, runnose, trbr, cough],
    success: function (res) {
      console.log(res);
      $("#resAlert").html(`Disease maybe ${res}`);
      $("#resAlert").show();
    },
  });
}
