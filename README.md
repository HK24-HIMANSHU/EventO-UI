## End Points Required
/event/all
/event/create
/event/update
/event/{id}
/event/cummunity/{id}
/event/owner/{id}
/event/user/{id}
/event/space/{id}
/event/date/{date}
/event/time/{time}

## Dummy DB

{
"owner": [
{
"Id": "1",
"Username": "John",
"Password": "1234",
"Email": "john@email.com",
"CreatedAt": "2020-01-01T00:00:00Z"
},
{
"Id": "2",
"Username": "Jane",
"Password": "1234",
"Email": "jane@email.com",
"CreatedAt": "2020-01-01T00:00:00Z"
},
{
"Id": "3",
"Username": "Jack",
"Password": "1234",
"Email": "jack@email.com",
"CreatedAt": "2020-01-01T00:00:00Z"
}
],
"spaces": [
{
"Id": "1",
"Name": "Space 1",
"Capacity": "10",
"CreatedAt": "2020-01-01T00:00:00Z",
"Laction": "1",
"Owner": "1",
"Amenities": "1,2,3"
},
{
"Id": "2",
"Name": "Space 2",
"Capacity": "20",
"CreatedAt": "2020-01-01T00:00:00Z",
"Laction": "2",
"Owner": "2",
"Amenities": "1,2,3"
},
{
"Id": "3",
"Name": "Space 3",
"Capacity": "30",
"CreatedAt": "2020-01-01T00:00:00Z",
"Laction": "3",
"Owner": "3",
"Amenities": "1,2,3"
}
],
"events": [
{
"Id": "1",
"Name": "Event 1",
"UserId": "1",
"SpaceId": "1",
"CreatedAt": "2020-01-01T00:00:00Z",
"Rules": "1,2,3",
"Date": "2020-01-01T00:00:00Z",
"Time": "2020-01-01T00:00:00Z",
"Duration": "1"
}
]
}
