import axios from 'axios';
import { basicUrl } from './basicUrl';

export enum OperationType {
  Block = 'Block',
  Unblock = 'Unblock',
  Delete = 'Delete'
}

export const handleExecute = async (
    selectedCheckboxes: string[],
    operation: OperationType,
  ) => {
    
    const deletePromises = selectedCheckboxes.map(checkbox => {
      switch (operation) {
        case OperationType.Block:
            return axios.get(`${basicUrl}/${checkbox}`).then(async (user) => {
                user.data.status = 'blocked'
                await axios.put(`${basicUrl}/${checkbox}`, user.data)
            }).catch(error => {
                console.error('Error:', error);
            });
          break;
        case OperationType.Unblock:
            return axios.get(`${basicUrl}/${checkbox}`).then(async (user) => {
                user.data.status = "active"
                await axios.put(`${basicUrl}/${checkbox}`, user.data)
            }).catch(error => {
                console.error('Error:', error);
            });
          break;
        case OperationType.Delete:
          return axios.delete(`${basicUrl}/${checkbox}`).catch(error => {
            console.error('Error:', error);
        });
        default:
          break;
      }
    });
  
    return Promise.all(deletePromises); 

};