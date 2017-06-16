			var start = function(e) {
				e.dataTransfer.effectAllowed = 'move';
				e.dataTransfer.setData('iconId', e.target.id);
				e.dataTransfer.setDragImage(e.target, 0, 0);
				return true;
			}

			var enter = function(e) {
				return true;
			}

			var over = function(e) {
				var iconId = e.dataTransfer.getData('iconId');
				var targetId = e.target.id;

				if (targetId.indexOf('icon') > -1) {
					return true;
				}

				return false;
			}

			var drop = function(e) {
				var iconId = e.dataTransfer.getData('iconId');
				var icon = document.getElementById(iconId);
				e.target.appendChild(icon);
				e.stopPropagation();
				return false;
			}

			var end = function(e) {
				e.dataTransfer.clearData('iconId');
				return true;
			}