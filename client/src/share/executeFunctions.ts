import axios from 'axios';

export enum OperationType {
  Block = 'Block',
  Unblock = 'Unblock',
  Delete = 'Delete'
}

export const handleExecute = async (
    selectedCheckboxes: string[],
    operation: OperationType
  ) => {
    const deletePromises = selectedCheckboxes.map(checkbox => {
      console.log(`Выполняется операция "${operation}" для выбранного элемента:`, checkbox);
  
      switch (operation) {
        case OperationType.Block:
            return axios.get(`http://localhost:3001/users/${checkbox}`).then(async (user) => {
                user.data.status = 'blocked'
                await axios.put(`http://localhost:3001/users/${checkbox}`, user.data).then(response => {
                    console.log('User updated:', response.data);
                })
            }).catch(error => {
                console.error('Error:', error);
            });
          break; //когда это происходит нужно снимать checkbox
        case OperationType.Unblock:
            return axios.get(`http://localhost:3001/users/${checkbox}`).then(async (user) => {
                user.data.status = "active"
                await axios.put(`http://localhost:3001/users/${checkbox}`, user.data).then(response => {
                    console.log('User updated:', response.data);
                })
            }).catch(error => {
                console.error('Error:', error);
            });
          break;
        case OperationType.Delete:
          return axios.delete(`http://localhost:3001/users/${checkbox}`).catch(error => {
            console.error('Error:', error);
        });
        default:
          break;
      }
    });
  
    return Promise.all(deletePromises);

};