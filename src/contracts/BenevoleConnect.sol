pragma solidity ^0.5.0;

/** @title Leases Smart Contract */
contract BenevoleConnect {

  // struct for Benevoles
  struct Benevole {
    address payable  benevole;
    uint reputation;
    bool isBlacklisted;
  }

  // Struct for Events
  struct Event {
    string nameEvent;
    address payable organizer;
    uint nbBenevolesNeeded;
    uint nbParticipants;
    uint limitReputation;
    uint recompenseReputation;
  }

  mapping (uint => address[]) public eventIDToListParticipantsBenevoles;

  Benevole[] public benevoles;
  Event[] public events;

  uint public benevolesCount;
  uint public eventsCount;


  // keep track of lease ownership -- index of lease => address of owner
  mapping (uint => address) public eventIDToOrganizer;
  // keep track of number of lease by owner -- address of owner => number of leases
  mapping (address => uint) public organizerEventsCount;

  event benevoleSubscribed (
    uint indexed index
  );

  constructor() public {
    // empty constructor -- nothing to do
  }

  function createEvent(
    string memory _nameEvent,
    uint _limitReputation,
    uint _recompenseReputation
  )
  public
  returns(bool)
  {

    events.push(
      Event(
        _nameEvent,
        msg.sender,
        300,
        0,
        _limitReputation,
        _recompenseReputation
      )
    );

    eventsCount++;
    organizerEventsCount[msg.sender]++;
    eventIDToOrganizer[eventsCount] = msg.sender;
    return true;
  }

  function addBenevole()
  public
  returns(bool)
  {
    benevoles.push(
      Benevole(
        msg.sender,
        100,
        false
      )
    );
    benevolesCount++;
    return true;
  }

  function subscribeToEvent(uint _eventID, uint _benevoleID)
  public
  returns(bool)
  {
    require(benevoles[_benevoleID].reputation >= events[_eventID].limitReputation);
    require(!benevoles[_benevoleID].isBlacklisted);
    events[_eventID].nbParticipants++;
    eventIDToListParticipantsBenevoles[_eventID].push(
      msg.sender
    );

    benevoles[_benevoleID].reputation = benevoles[_benevoleID].reputation + events[_eventID].recompenseReputation;
    emit benevoleSubscribed(_benevoleID);
    return true;
  }

  function blacklistBenevole(uint _benevoleID)
  public
  returns(bool)
  {
    benevoles[_benevoleID].isBlacklisted = true;
  }

  function getXPBenevole(uint _benevoleID)
  public
  view
  returns(uint)
  {
    return benevoles[_benevoleID].reputation;
  }

}

