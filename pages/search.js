import React from "react";
import { mapGlobals } from "utils/helperFuncs";
import Head from "next/head";
import Meta from "components/widgets/Meta";
import Search from "components/views/search";
import Header from "components/views/partials/header";
import Footer from "components/views/partials/footer";
import Request from "utils/request";

class SearchPage extends React.Component {
  static async getInitialProps({ req, query }) {
    const Response = await Request.getGlobals();
    const bucketResponse = await Request.getObjects();
    const searchResponse = await Request.getObject('search');
    const bucket = bucketResponse.objects;
    const search = searchResponse.object;
    const globals = mapGlobals(Response.objects);
    return { globals, bucket, search };
  }