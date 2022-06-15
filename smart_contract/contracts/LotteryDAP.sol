// SPDX-License-Identifier: UNLICENSED
pragma solidity ^ 0.8.0;

contract LotteryDAP{


  address payable public manager;

  //Participant Structure
  struct Participant {
  address payable participantAddress;
  string message;
  string keyword;
  uint createdAt;
}
 Participant[] public participants;
  uint public noOfParticipants;
  uint public balance;

  constructor(){
   noOfParticipants=0;
   manager=payable(msg.sender);
   }

   function getBalance() public view returns(uint){
    return balance;
   }

  
  function getWinner()public  returns(address){

  uint index= uint (keccak256(abi.encodePacked(block.difficulty,block.timestamp,noOfParticipants))) % noOfParticipants;
    address payable _participantAddress= participants[index].participantAddress;
  delete participants;
  noOfParticipants=0;
  balance=0;  
   return _participantAddress;

  }

  function setParticiapnt (string memory _message, string memory _keyword) public{

      
      Participant memory newParticipant;
      newParticipant.participantAddress=payable(msg.sender);
      newParticipant.message=_message;
      newParticipant.keyword=_keyword;
      newParticipant.createdAt=block.timestamp;
      participants.push(newParticipant);
      noOfParticipants+=1;  
      balance=balance+1;
     
  
  }

  function getParticipants() public view returns(Participant[] memory){

  return participants;


  }

}