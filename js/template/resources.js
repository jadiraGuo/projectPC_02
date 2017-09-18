define([],function(){
	return {
		category:`
			<% for(var i=0;i<data.length;i++){ %>				
				<dl>
					<dt><a href=""><%=data[i].first %></a></dt>
					<dd class="rel">
					<% var num01 = data[i]["list"].length>=4 ? 4: data[i]["list"].length %>
						<% for(var j=0;j<num01;j++){ %>
							<a href=<%=data[i]["list"][j]["url"] %> ><%=data[i]["list"][j]["name"] %></a>
						<% } %>
					</dd>
					<dd class="nav-aside">
						<div class="as_col">
						<p class="aside_tile"><a href=""><%=data[i].first %>></a></p>
						<div class="aside_list">
						<% var num02 = data[i]["list"].length>=8 ? 8: data[i]["list"].length %>
							<% for(var s=0;s<num02;s++){ %>
							<a href="">
								<img src=img/<%=data[i]["list"][s]["img"]%> />
								<p><%=data[i]["list"][s]["name"]%></p>
								
							</a>
							<% } %>
						</div>
						</div>
						<div class="as_col">
						<p class="aside_tile arc_title"><a href="">精选推荐></a></p>
						<div class="arc_list">
						<% var num03 = data[i]["list"].length>=15 ? 15: data[i]["list"].length %>
							<% for(var c=0;c<num03;c++){ %>
								<% if(data[i]["list"][c]["recommended"]){ %>
							<a href="">								
								<%=data[i]["list"][c]["name"]%><span>|</span>
								
							</a>
							<% } }%>
						</div>
						</div>
						<div class="as_col">
						<p class="aside_tile arc_title"><a href="">促销精选></a></p>
						<div class="arc_list">
						<% var num03 = data[i]["list"].length>=15 ? 15: data[i]["list"].length %>
							<% for(var c=0;c<num03;c++){ %>
								<% if(data[i]["list"][c]["sales"]){ %>
							<a href="">								
								<%=data[i]["list"][c]["name"]%><span>|</span>
								
							</a>
							<% } }%>
						</div>
						</div>
					</dd>
				</dl>
			<% } %>
		`,
		list:`
		<%console.log(1111)%>
			<%for(var i=0;i<data.length;i++){
          				for(var j =0;j<data[i]["plist"].length;j++){
          					var name=data[i]["plist"]["name"];
          					var img=data[i]["plist"]["img"];
          					var nprice=data[i]["plist"]["nprice"];
          					var oprice=data[i]["plist"]["oprice"];
          					var sales=data[i]["plist"]["sales"];
          					var tag=data[i]["plist"]["tag"];
          					var taglist=tag.split(",");%>
          					<li>
								<dl>
									<dd><a href="">
											<img src=<%=img%> alt=""></a>
									</dd>
									<dt>
										<p class="goods_tag01">正装表爆款！</p>
										<p class="goods_tag01hover">
										<%for(var x in taglist){%>
										<a href="javascript:"><%=taglist[x]%></a>
										<%}%>
										</p>
										<p class="goods_tag02"><a href=""><%=name%></a></p>
										<div class="tPrc"><em class="s_goods_num"><%=sales%></em><b class="s_price"><%=nprice%></b><i class="red">【<%=parseFloat(oprice/nprice).toFixed(1)%>】</i></div>
										<div class="hover_info">
											<a class="info_ans" href="">询最低价<em></em></a>
											<span class="info_comp" href="">对比<input type="checkbox"></span>
										</div>
									</dt>
								</dl>
							</li>
          				<%}%>
		`
	}
})