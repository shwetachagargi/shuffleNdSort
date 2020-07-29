function shuffleNodes() {
	var list = document.getElementById('itemlist');
	var i=0;
	nodes = Array.prototype.slice.call(list.children);
	nodes = shuffle(nodes);
	while(i < nodes.length) {
		list.appendChild(nodes[i]);
		++i;
	}
}

function shuffle(nodes) {
	var nodeArr = nodes.slice(0);
	var tempNode;
	var i = nodeArr.length;
	var randNode;
	while(--i) {
		randNode = Math.floor(i*Math.random());
		tempNode = nodeArr[randNode];
		nodeArr[randNode] = nodeArr[i];
		nodeArr[i] = tempNode;
	}
	return nodeArr;
	
}

function sortNodes() {
	var itemlist = document.getElementById('itemlist');
	nodes = Array.prototype.slice.call(itemlist.children,0);
	nodes.sort(function(a,b) {
		return a.firstChild.nodeValue - b.firstChild.nodeValue;
	})

	for(i = 0; i< nodes.length; i++) {
		itemlist.append(nodes[i])
		
	}
}