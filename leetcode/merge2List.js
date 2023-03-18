/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list.
The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

/*
Example: 
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/

let list1 = [1,2,4];
let list2 = [1,3,4];

var merged = [];
var mergeTwoLists = function(list1, list2) {

    merged = list1.concat(list2);
    console.log(merged);

};


mergeTwoLists(list1, list2);