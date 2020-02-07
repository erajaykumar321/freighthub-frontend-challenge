import React, { Component, Fragment } from 'react';
import MaterialTable from 'material-table';

import DetailModal from './../common/DetailModal';

class ShipmentList extends Component {
  state = {
    showDetailModal: false,
    selectedShipment: null
  };

  handleOnHide = () => {
    this.setState({
      showDetailModal: false,
      selectedShipment: null
    });
  };

  render = () => {
    return (
      <Fragment>
        <MaterialTable
          actions={[
            {
              icon: 'remove_red_eye',
              tooltip: 'View Shipment Detail',
              onClick: (event, rowData) => {
                this.setState({
                  showDetailModal: true,
                  selectedShipment: rowData
                });
              }
            },
            {
              icon: 'trash',
              tooltip: 'Delete Shipment',
              onClick: (event, rowData) => {}
            }
          ]}
          title='Shipment'
          columns={[
            { title: 'Id', field: 'id' },
            { title: 'Name', field: 'name' },
            { title: 'Type', field: 'type' },
            { title: 'Mode', field: 'mode' },
            { title: 'Origin', field: 'origin' },
            { title: 'Destination', field: 'destination' }
          ]}
          data={query =>
            new Promise((resolve, reject) => {
              let url = 'http://localhost:3007/shipments?';
              url += '_limit=' + query.pageSize;
              url += '&_page=' + (query.page + 1);
              fetch(url)
                .then(async response => {
                  return {
                    data: await response.json(),
                    total: response.headers.get('X-Total-Count')
                  };
                })
                .then(result => {
                  console.log(result);
                  resolve({
                    data: result.data,
                    page: query.page,
                    totalCount: parseInt(result.total)
                  });
                });
            })
          }
        />
        <DetailModal
          show={this.state.showDetailModal}
          item={this.state.selectedShipment}
          onHide={this.handleOnHide}
        />
      </Fragment>
    );
  };
}

export default ShipmentList;
