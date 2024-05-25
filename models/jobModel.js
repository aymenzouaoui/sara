// jobModel.js

import Web3 from 'web3';

// Initialize Web3 with the appropriate provider
const web3 = new Web3('http://localhost:3000'); // Replace with your Ethereum node URL


// Replace contractABI with the ABI of your contract
const contractABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_email",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_service",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_date",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_time",
                "type": "string"
            }
        ],
        "name": "bookService",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "bookings",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "service",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "date",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "time",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBookings",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "email",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "service",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "date",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "time",
                        "type": "string"
                    }
                ],
                "internalType": "struct HandymanContract.Booking[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const contractAddress = '0x681709C580757Fde3e77CF5bf1Ece7E7e7E7dDbb'; // Replace with your contract address


const contract = new web3.eth.Contract(contractABI, contractAddress);

class JobModel {
  static async bookService(name, email, service, date, time) {
    try {
      const accounts = await web3.eth.getAccounts();
      await contract.methods.bookService(name, email, service, date, time).send({ from: accounts[0] });
      console.log('Service booked successfully');
    } catch (error) {
      console.error('Error booking service:', error);
      throw error; // Rethrow the error to be handled by the controller
    }
  }

  static async getBookings() {
    try {
      const bookings = await contract.methods.getBookings().call();
      return bookings;
    } catch (error) {
      console.error('Error fetching bookings:', error);
      throw error; // Rethrow the error to be handled by the controller
    }
  }
}

export default JobModel;