
(function($, window, document, undefined) {
	'use strict';
	$.fn.myEmoji = function(options) {
		var defaults = {
			emojiconfig: {
				qq: {
					name: "QQ表情",
					path: "images/expression/wgqq/",
					maxNum: 107,
					file: ".png",
					placeholder: ":{alias}:",
					alias: {
						 0:"[呲牙]",
						 1:"[调皮]",
						 2:"[流汗]",
						 3:"[偷笑]",
						 4:"[再见]",
						 5:"[敲打]",
						 6:"[擦汗]",
						 7:"[猪头]",
						 8:"[玫瑰]",
						 9:"[流泪]",
						 10:"[大哭]",
						 11:"[嘘]",
						 12:"[酷]",
						 13:"[抓狂]",
						 14:"[委屈]",
						 15:"[便便]",
						 16:"[炸弹]",
						 17:"[菜刀]",
						 18:"[可爱]",
						 19:"[色]",
						 20:"[害羞]",
						 21:"[得意]",
						 22:"[吐]",
						 23:"[微笑]",
						 24:"[发怒]",
						 25:"[尴尬]",
						 26:"[惊恐]",
						 27:"[冷汗]",
						 28:"[爱心]",
						 29:"[示爱]",
						 30:"[白眼]",
						 31:"[傲慢]",
						 32:"[难过]",
						 33:"[惊讶]",
						 34:"[疑问]",
						 35:"[睡]",
						 36:"[亲亲]",
						 37:"[憨笑]",
						 38:"[爱情]",
						 39:"[衰]",
						 40:"[撇嘴]",
						 41:"[阴险]",
						 42:"[奋斗]",
						 43:"[发呆]",
						 44:"[右哼哼]",
						 45:"[拥抱]",
						 46:"[坏笑]",
						 47:"[飞吻]",
						 48:"[鄙视]",
						 49:"[晕]",
						 50:"[大兵]",
						 51:"[可怜]",
						 52:"[强]",
						 53:"[弱]",
						 54:"[握手]",
						 55:"[胜利]",
						 56:"[抱拳]",
						 57:"[凋谢]",
						 58:"[饭]",
						 59:"[蛋糕]",
						 60:"[西瓜]",
						 61:"[啤酒]",
						 62:"[飘虫]",
						 63:"[勾引]",
						 64:"[OK]",
						 65:"[爱你]",
						 66:"[咖啡]",
						 67:"[钱]",
						 68:"[月亮]",
						 69:"[美女]",
						 70:"[刀]",
						 71:"[发抖]",
						 72:"[差劲]",
						 73:"[拳头]",
						 74:"[心碎]",
						 75:"[太阳]",
						 76:"[礼物]",
						 77:"[足球]",
						 78:"[骷髅]",
						 79:"[挥手]",
						 80:"[闪电]",
						 81:"[饥饿]",
						 82:"[困]",
						 83:"[咒骂]",
						 84:"[折磨]",
						 85:"[抠鼻]",
						 86:"[鼓掌]",
						 87:"[糗大了]",
						 88:"[左哼哼]",
						 89:"[哈欠]",
						 90:"[快哭了]",
						 91:"[吓]",
						 92:"[篮球]",
						 93:"[乒乓球]",
						 94:"[NO]",
						 95:"[跳跳]",
						 96:"[怄火]",
						 97:"[转圈]",
						 98:"[磕头]",
						 99:"[回头]",
						 100:"[跳绳]",
						 101:"[激动]",
						 102:"[街舞]",
						 103:"[献吻]",
						 104:"[左太极]",
						 105:"[右太极]",
						 106:"[闭嘴]"
					},
					title: {
                        "[呲牙]":"0",
                        "[调皮]":"1",
                        "[流汗]":"2",
                        "[偷笑]":"3",
                        "[再见]":"4",
                        "[敲打]":"5",
                        "[擦汗]":"6",
                        "[猪头]":"7",
                        "[玫瑰]":"8",
                        "[流泪]":"9",
                        "[大哭]":"10",
                        "[嘘]":"11",
                        "[酷]":"12",
                        "[抓狂]":"13",
                        "[委屈]":"14",
                        "[便便]":"15",
                        "[炸弹]":"16",
                        "[菜刀]":"17",
                        "[可爱]":"18",
                        "[色]":"19",
                        "[害羞]":"20",
                        "[得意]":"21",
                        "[吐]":"22",
                        "[微笑]":"23",
                        "[发怒]":"24",
                        "[尴尬]":"25",
                        "[惊恐]":"26",
                        "[冷汗]":"27",
                        "[爱心]":"28",
                        "[示爱]":"29",
                        "[白眼]":"30",
                        "[傲慢]":"31",
                        "[难过]":"32",
                        "[惊讶]":"33",
                        "[疑问]":"34",
                        "[睡]":"35",
                        "[亲亲]":"36",
                        "[憨笑]":"37",
                        "[爱情]":"38",
                        "[衰]":"39",
                        "[撇嘴]":"40",
                        "[阴险]":"41",
                        "[奋斗]":"42",
                        "[发呆]":"43",
                        "[右哼哼]":"44",
                        "[拥抱]":"45",
                        "[坏笑]":"46",
                        "[飞吻]":"47",
                        "[鄙视]":"48",
                        "[晕]":"49",
                        "[大兵]":"50",
                        "[可怜]":"51",
                        "[强]":"52",
                        "[弱]":"53",
                        "[握手]":"54",
                        "[胜利]":"55",
                        "[抱拳]":"56",
                        "[凋谢]":"57",
                        "[饭]":"58",
                        "[蛋糕]":"59",
                        "[西瓜]":"60",
                        "[啤酒]":"61",
                        "[飘虫]":"62",
                        "[勾引]":"63",
                        "[OK]":"64",
                        "[爱你]":"65",
                        "[咖啡]":"66",
                        "[钱]":"67",
                        "[月亮]":"68",
                        "[美女]":"69",
                        "[刀]":"70",
                        "[发抖]":"71",
                        "[差劲]":"72",
                        "[拳头]":"73",
                        "[心碎]":"74",
                        "[太阳]":"75",
                        "[礼物]":"76",
                        "[足球]":"77",
                        "[骷髅]":"78",
                        "[挥手]":"79",
                        "[闪电]":"80",
                        "[饥饿]":"81",
                        "[困]":"82",
                        "[咒骂]":"83",
                        "[折磨]":"84",
                        "[抠鼻]":"85",
                        "[鼓掌]":"86",
                        "[糗大了]":"87",
                        "[左哼哼]":"88",
                        "[哈欠]":"89",
                        "[快哭了]":"90",
                        "[吓]":"91",
                        "[篮球]":"92",
                        "[乒乓球]":"93",
                        "[NO]":"94",
                        "[跳跳]":"95",
                        "[怄火]":"96",
                        "[转圈]":"97",
                        "[磕头]":"98",
                        "[回头]":"99",
                        "[跳绳]":"100",
                        "[激动]":"101",
                        "[街舞]":"102",
                        "[献吻]":"103",
                        "[左太极]":"104",
                        "[右太极]":"105",
                        "[闭嘴]":"106"
                    }


				}
				//, AcFun: {
				// 	name: "AcFun表情",
				// 	path: "img/AcFun/",
				// 	maxNum: 54,
				// 	file: ".png"
				// }
			},
			postFunction: function() {
				alert(InputText.html());
				console.log(InputText.html());
			}
		};
		var opts = $.extend(defaults, options);
		var emojiconfig = opts.emojiconfig;
		var plBox = $(this);
		var faceDiv = plBox.find('.facebox');
		var InputText = $('#dope');
		var InputFoot = plBox.find('.inputBox');
		var imgBtn = plBox.find('.imgBtn');

		imgBtn.click(
			function() {
				var emojiContainer = faceDiv.find('.emoji_container');
				if (emojiContainer.children().length <= 0) {
					faceDiv.css({
						width: Math.floor(InputText.width() / 30) * 30 + 'px',
						display: 'block'
					});
					for (var emojilist in emojiconfig) {
						console.log(emojilist);
						emojiContainer.append('<section class="for_' + emojilist + '"></section>');
						faceDiv.find('.emoji_tab').append('<a href="#!" data-target="for_' + emojilist + '">' + emojiconfig[emojilist].name + '</a>');
						for (var i = 0; i < emojiconfig[emojilist].maxNum; i++) {
							if (emojiContainer.find('.for_' + emojilist) !== undefined) {
								// emojiContainer.find('.for_' + emojilist).append('<a href="#!" class="_img"><img src="' + emojiconfig[emojilist].path + i + emojiconfig[emojilist].file + '" alt="" data-alias="'+(emojiconfig[emojilist].alias == undefined ? (i+emojiconfig[emojilist].file) : emojiconfig[emojilist].alias[i])+'" title="' + (emojiconfig[emojilist].title == undefined ? '' : emojiconfig[emojilist].title[i]) + '" style="width: 24px;height: 24px;"  /></a>');
								emojiContainer.find('.for_' + emojilist).append('<a href="#!" class="_img"><img src="' + emojiconfig[emojilist].path + i + emojiconfig[emojilist].file + '" alt="" data-alias="'+(emojiconfig[emojilist].alias == undefined ? (i+emojiconfig[emojilist].file) : emojiconfig[emojilist].alias[i])+'" title="'+(emojiconfig[emojilist].alias == undefined ? (i+emojiconfig[emojilist].file) : emojiconfig[emojilist].alias[i])+'" style="width: 24px;height: 24px;"  /></a>');
							}
						}
					}
					faceDiv.find('.emoji_container section')[0].style.display = 'block';
					faceDiv.find('.emoji_tab a')[0].className += 'active';
					faceDiv.find('.emoji_container ._img').on('click', function() {
						if (InputText[0].nodeName === 'DIV') {
							// InputText.append(this.innerHTML);
							InputText.append($(this).find('img').attr('data-alias'));
						} else {
							// InputText.append('[' + $(this).find('img').attr('data-alias')+']');
							InputText.append( $(this).find('img').attr('data-alias'));
                            // InputText.val('[' + $(this).find('img').attr('data-alias')+']');
						}

					});
					faceDiv.find('.emoji_tab a').on('click', function() {
						$(this).parent().prev().find('section').hide();
						faceDiv.find('.emoji_container .' + $(this).attr('data-target')).show();
						faceDiv.find('.emoji_tab a').removeClass('active');
						this.className += ' active';
					});
				} else {
					faceDiv.toggle();
				}
			}
		);

		InputFoot.find('.postBtn').on('click', opts.postFunction);
		$(document).on('click', function(e) {
			if ((faceDiv.find($(e.target)).length) <= 0 && (imgBtn.find($(e.target)).length <= 0)) {
				faceDiv.hide();
			}
		});
	};
})(jQuery, window, document);