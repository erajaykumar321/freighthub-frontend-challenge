import React, { Component, Fragment } from 'react';
import MaterialTable from 'material-table';

import DetailModal from './../common/DetailModal';

const URL = 'http://localhost:3007';

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
              let url = `${URL}/shipments?`;
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
          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  fetch(`${URL}/shipments`, {
                    method: 'post',
                    body: JSON.stringify(newData)
                  }).then(async () => {
                    resolve();
                  });
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  fetch(`${URL}/shipments/${oldData.id}`, {
                    method: 'put',
                    body: JSON.stringify(newData)
                  }).then(async () => {
                    resolve();
                  });
                }, 1000);
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  fetch(`${URL}/shipments/${oldData.id}`, {
                    method: 'delete'
                  }).then(async () => {
                    resolve();
                  });
                }, 1000);
              })
          }}
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
