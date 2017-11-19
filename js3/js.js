var arr=["差","不合格","一般","良好","优秀"];
	var con=false;
	var a=document.getElementsByTagName('img');
	var b=document.getElementsByTagName('textarea')
	function starPic(x){
		
		if(x<3)
		{
			for(var t=0;t<x;t++)
				a[t].src="images/star1.png";
				b[0].value=arr[t-1];
		}
		else
		{
			for(var i=0;i<x;i++)
				{
					a[i].src="images/star2.png";
					b[0].value=arr[i];
				}
		}

	}

	function hid(f){
		if(con==true)
		{}
	    if(con==false)
		{
			for(var x=0;x<f;x++)
			{
				a[x].src="images/star0.png";
			}
			b[0].value=" ";

		}

	}
	function qd(y){
		hid(y);
		for(var r=0;r<y;r++)
		{
			a[r].src="images/star2.png";
			b[0].value=arr[r];
		}
		con=true;
	}
