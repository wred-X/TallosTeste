import axios from 'axios';

export default () => axios.create({
  // 'baseURL' do Back-End
  baseURL: 'http://localhost:3000/api/v1',
});
