// new ScrollImg({
// 		id:"container",
// 		animation:true,
// 		nav:true,
// 		handle:true
// });

function ScrollImg(obj){
	this._boj=obj;
	this._box=document.getElementById(this._boj.boxid);	
	this.init();
}
ScrollImg.prototype={
	init:function(){
		this.current=0;
		this._ul=this._box.children[0];

		this.num=this._ul.children.length;
		this._ul.style.width=this._box.offsetWidth*this.num+"px";
		if(this._boj.animation){
			this.scroll();
		}
		if(this._boj.nav){
			this.navinit();
		}
		if(this._boj.handle){
			this.handleinit();
		}
	},
	scroll:function(){
		var speed = this._boj.speed ? this._boj.speed:1000;
		this.scrolltime=setInterval(function(){
			this.autoscroll();
		}.bind(this),speed)
	},
	autoscroll:function(){
		
		if(this.navbox){
			this.navscroll();
		}
			this._ul.style.left=-(this._box.offsetWidth*(this.current))+"px";
		if(this.current==this.num-1){	

				this.current=0;				
		}else if(this.current<0){
				this.current=this.num;
		}else{
			this.current++;
		}
	},
	navinit:function(){
		var frag=document.createDocumentFragment();
		for(var i=0;i<this.num;i++){
			var _span=document.createElement("span");
			_span.className="navscroll";
			frag.appendChild(_span);
		}
		this.navbox=document.createElement("div");
		this.navbox.id="navscroll";
		this.navbox.appendChild(frag);
		this._box.appendChild(this.navbox);
		return this;		
	},
	navscroll:function(){
		for(var i=0;i<this.navbox.children.length;i++){
			this.navbox.children[i].className="navscroll";
		}
			this.navbox.children[this.current].className="navscroll_current";
	},
	handleinit:function(){
		this._left=document.createElement("div");
		this._left.id="handLeft";
		this._right=document.createElement("div");
		this._right.id="handRight";
		this._box.appendChild(this._left);
		this._box.appendChild(this._right);
		this._left.addEventListener("click",function(){
			this.left();
		}.bind(this));
		this._right.addEventListener("click",function(){
			this.right();
		}.bind(this));
		return this;
	},
	left:function(){
		this.current=this.current < 0 ? this.num : this.current-1;
		//autoscroll();
	},
	right:function(){
		this.current=this.current >= this.num ? 0 :this.current-1;
		//autoscroll();
	}
}
