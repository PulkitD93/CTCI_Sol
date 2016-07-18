/**
 * Created by pulkit on 6/21/16.
 */

function Link(value) {
    this.value = value;
    this.next = null;
}
//console.log(link);
function LinkList() {
    this.head = null;
    this.length = 0;
}
var printList = function (node) {
    var cur = node;
    while (cur) {
        process.stdout.write(parseInt(cur.value) + "-->");
        cur = cur.next;
    }

}
LinkList.prototype.addLast = function (val) {
    var node = new Link(val);
    var length = this.length;
    var cur = this.head;
    if (!cur) {
        this.head = node;
        this.length++;
        return node;
    }
    while (cur.next) {
        cur = cur.next;
    }
    cur.next = node;
    this.length++;
    return node;
}
LinkList.prototype.addFirst = function (val) {
    var node = new Link(val);
    if (!this.head) {
        this.head = node;
        this.length++;
        return node;
    }
    node.next = this.head;
    this.head = node;
    this.length++;
    return node;
}
LinkList.prototype.addNodeLast=function (node) {
    var length=this.length;
    var cur=this.head;
    if (!cur) {
        this.head = node;
        this.length++;
        return node;
    }
    while (cur.next) {
        cur = cur.next;
    }
    cur.next = node;
    this.length++;
    return node;
}

LinkList.prototype.search = function (val) {
    var cur = this.head;
    var count = 1;

    while (cur.next !== null) {
        if (cur.value === val) {
            return count;
        }
        cur = cur.next;
        count++;
    }
    return -1;
}
LinkList.prototype.remove = function (val) {
    var pos = this.search(val);
    var cur = this.head;
    if (pos === -1)
        return;
    if (pos === 1) {
        this.head = this.head.next;
        this.length--;
        return;
    }

    for (var i = 2; i < pos; i++) {
        cur = cur.next;
    }
    cur.next = cur.next.next;

}
LinkList.prototype.removeDups = function () {
    var cur = this.head;
    var buffer = new Set();
    while (cur) {
        buffer.add(cur.value);
        cur = cur.next;
    }
    this.head = null;
    for (var node of buffer) {
        this.addLast(node);
    }

}
LinkList.prototype.partition = function (val) {
    // var node = new Link(val);
    var head = this.head;
    var tail = this.head;
    var cur = this.head;
    while (cur) {
        var next = cur.next;//Need to save it as we are changing the cur.next below
        // console.log("while loop")
        if (cur.value < val) {
            cur.next = head;
            head = cur;
        }
        else {
            tail.next = cur;
            tail = cur;
        }
        cur = next;
    }
    tail.next = null;
    return head;
}

//
var list1 = new LinkList();
list1.addLast(9);
list1.addFirst(9);
list1.addLast(9);
list1.addLast(8);
list1.addLast(5);
// list1.addLast(10);
// list1.addFirst(3);
// list1.addLast(2);
// list1.addLast(1);
// // list1.addLast(15);
// // list1.addLast(65);
//
// // console.log(list1);
// // console.log(list1.search(20));
// printList(list1.head);
// // list1.removeDups();
// console.log();
// var newHead = list1.partition(5);
// printList(newHead);

var sumLists = function (list1, list2) {
    var cur1 = list1.head;
    var cur2 = list2.head;
    var resultList = new LinkList();
    var carryFwd = 0;
    while (cur1 && cur2) {
        var sum = cur1.value + cur2.value + carryFwd;
        if (sum < 10) {
            carryFwd = 0;
            resultList.addLast(sum);
        }
        else {
            carryFwd = 1;
            resultList.addLast(sum % 10);
        }

        cur1 = cur1.next;
        cur2 = cur2.next;
    }
    while (cur1) {

        resultList.addLast(cur1.value + carryFwd);
        cur1 = cur1.next;
        carryFwd = 0;
    }
    while (cur2) {
        resultList.addLast(cur2.value + carryFwd);
        cur2 = cur2.next;
        carryFwd = 0;
    }
    resultList.addLast(carryFwd);
    return resultList;


}
var sumListR = function (list1, list2) {
    var cur1 = list1.head;
    var cur2 = list2.head;
    var resultList = new LinkList();
    var carryFwd = 0;
    var a1 = new Array();
    var a2 = new Array();
    while (cur1) {
        a1.push(cur1.value);
        cur1 = cur1.next;

    }
    while (cur2) {
        a2.push(cur2.value);
        cur2 = cur2.next;
    }
    var numStr1 = a1.join('');
    var numStr2 = a2.join('');
    var num1 = parseInt(numStr1);
    var num2 = parseInt(numStr2);
    var num3 = num1 + num2;
    console.log("Result :" + num3);
    //Make a linked List from num3
    var linkResult = new LinkList();
    while (num3 > 10) {
        console.log("Adding to List" + num3 % 10);
        linkResult.addFirst(Math.floor(num3 % 10));
        num3 /= 10;
    }
    linkResult.addFirst(Math.floor(num3));
    // delete a1;
    // delete a2;
    return linkResult.head;

}
var sumListR2 = function (list1, list2) { //Withou using extra ds
    var resultList = new LinkList();
    var carryFwd = 0;
    var dif = Math.abs(list1.length - list2.length);
    list1 = pad0s(list1, 1);//Additional padding for carry
    list2 = pad0s(list2, 1);
    if (list1.length > list2.length) {
        list2 = pad0s(list2, dif);
    }
    else if (list2.length > list1.length) {
        list1 = pad0s(list1, dif);
    }
    printList(list1.head);
    console.log();
    printList(list2.head);
    console.log(resultList);
    resultList = addLists(list1.head, list2.head, resultList).rList;
    console.log(resultList.head);
    return resultList
}
function pad0s(list, dif) {
    while (dif > 0) {
        var node = new Link(0);
        node.next = list.head;
        list.head = node;
        dif--;
    }
    // printList(list.head);
    return list;
}
function addLists(node1, node2, rList) {
    var carry = 0;
    var sum = 0;
    var node = new Link();
    if (!node1.next) {
        sum = node1.value + node2.value;
        node.value = parseInt(sum % 10);
        console.log("Node we are adding:" + node.value);
        carry = Math.floor(sum / 10);
        // console.log("Carry is:"+carry);
        rList.addFirst(node.value);
        return {
            rList, carry

        }
    }
    carry = parseInt(addLists(node1.next, node2.next, rList).carry);
    node.value = parseInt((carry + node1.value + node2.value) % 10);
    console.log("Node we are adding:" + node.value);

    rList.addFirst(node.value);
    return {
        rList, carry
    }
}
function pallindrome(list1) {
    var cur = list1.head;
    var run = list1.head;
    var checkOdd = false;
    var stack = new Array();
    while (run) {
        stack.push(cur.value);
        checkOdd = !run.next;//if run.next exists then it is even
        run = run.next ? run.next.next : null;//if run.next.next exists
        cur = cur.next;

    }
    console.log("Stack is:" + stack);
    //now cur is in middle
    //check for odd/even for stack
    if (checkOdd) {
        stack.pop();   //delete the last pushed element
    }
    while (cur) {
        var curPop = stack.pop();
        if (cur.value !== curPop) {
            console.log("Its false because" + cur.value + "!==" + curPop)
            return false;
        }
        cur = cur.next;
    }
    return true;
}
var list2 = new LinkList();
list2.addFirst(6);
list2.addFirst(8);
list2.addFirst(9);
console.log();
// printList(list2.head);
// console.log();
// printList((sumLists(list1, list2)).head);
// printList(sumListR2(list1,list2).head);
var list3 = new LinkList();
list3.addLast(3);
list3.addLast(5);
list3.addLast(10);
// list3.addFirst(15);
list3.addFirst(3);
list3.addFirst(5);
list3.addFirst(10);
printList(list3.head);
console.log(pallindrome(list3));
//Solution Q. 2.7 Intersection
function intersection(list1, list2) {
    var cur1 = list1.head, cur2 = list2.head;
    console.log("Length of each list"+list1.length+", "+list2.length)
    var dif = list1.length - list2.length;
    console.log("Difference is:"+dif);
    while (dif > 0) {
        cur1=cur1.next;
        dif--;
    }
    console.log(cur1.value+"Difference is:"+dif);
    console.log(cur2.value);

    while(dif<0){
        cur2=cur2.next;
        dif++;
    }
    while(cur1!==cur2&&cur1&&cur2){
        cur1=cur1.next;
        cur2=cur2.next;
    }
    if(!cur1||!cur2){
        console.log("Not present");
        return null;
    }
    return cur1;

}
var list4=new LinkList();
list4.head=list2.head.next;
list4.length=list2.length-1;
list4.addFirst(10);
list4.addFirst(12);
list4.addFirst(17);
// list4.length=7;
console.log("List1:");
printList(list2.head);
console.log("List2:");
printList(list4.head);
console.log("The intersection point is: "+intersection(list2,list4).value);

function loopDetect(list) { //My implementation
    var map= new Map();
    var cur=list.head
    while (cur) {
        if(map.has(cur)){
            return cur;
        }
        map.set(cur,cur.value);
        cur=cur.next;
    }
    return null;
}
function loopDetectBook(list) { //Book implementation
    var head=list.head;
    var cur= list.head;
    var run=list.head;
    while(run&&run.next){
        cur=cur.next;
        run=run.next?run.next.next:null;
        if(cur==run)
            break;
    }
    if(!run||!run.next){
        return null;
    }
    cur=head;
    while(cur!==run){
        cur=cur.next;
        run=run.next.next;
    }
    return run;
}
//testing loop detection
var list5=new LinkList();
list5.head=list4.head.next;
list5.length=list4.length-1;
var node5= new Link(11);
list5.addNodeLast(node5);
list5.addLast(10);
list5.addLast(12);
list5.addLast(17);
list5.addNodeLast(node5);

console.log("Loop Detection: "+loopDetect(list5).value);
console.log("Loop DetectBook: "+loopDetectBook(list5).value);