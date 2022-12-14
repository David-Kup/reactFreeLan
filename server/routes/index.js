const express = require("express");
const router = express.Router();
const helper = require("./../helper/helper.js");
const app = express();
const QueryService = require("../services/Queries.js");
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());
app.options("*", cors());

const queryService = new QueryService();

module.exports = function (api, passport) {
  // router.get("/", async (req, res) => {
  //   // res.send({ response: "I am alive" }).status(200);
  //   let results = await home.GetHome();
  //   return res.json(results);
  // });
  //Get User Data
  router.post(
    "/getuserdata",
    passport.authenticate("oauth-bearer", { session: false }),
    async (req, res) => {
      var username = req.authInfo.preferred_username;
      try {
        let val = await api.GetUserData(username);
        helper.callback(res, val, null);
      } catch (e) {
        helper.callback(res, null, e);
      }
    }
  );

  router.get("/getAssets", async (req, res) => {
    console.log("getAssets Triggered");
    let results = await queryService.GetAssets();
    return res.json(results);
  });

  router.get("/getMapData", async (req, res) => {
    console.log("getMapData Triggered");
    let results = await queryService.GetMapData();
    return res.json(results);
  });

  router.get("/getT007Data", async (req, res) => {
    console.log("getT007Data Triggered");
    let results = await queryService.GetT007Data();
    return res.json(results);
  });

  router.get("/Get700TCraneData", async (req, res) => {
    console.log("getT007Data Triggered");
    let results = await queryService.Get700TCraneData();
    //console.log(results);
    return res.send(results);
  });

//GetCraneTrends
router.get("/Get700TCraneTrends", async (req, res) => {
  console.log("Crane700T_GetCraneTrendsSQL Triggered");
  let results = await queryService.Crane700T_GetCraneTrendsSQL(req.category?req.category:"");
  //console.log(results);
  return res.send(results);
});
  return router;
};
