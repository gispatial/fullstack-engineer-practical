import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import DataTableCustom from "./DataTableCustom"

class DataTables extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Sales"
          breadCrumbParent="Soft Drinks / Chill / Hot"
          breadCrumbActive="Current Inventory"
        />
        <Row>
          <Col sm="12">
            <DataTableCustom />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default DataTables
