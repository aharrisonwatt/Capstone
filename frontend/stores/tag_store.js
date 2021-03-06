var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var TagConstants = require('../constants/tag_constants');

var TagStore = new Store(AppDispatcher);
var _tags = {};

//API

TagStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case TagConstants.TAGS_RECIEVED:
      resetTags(payload.tags);
      this.__emitChange();
      break;
  }
};

TagStore.all = function(){
  return Object.assign({}, _tags);
};

//Private Methods

function resetTags(tags){
  _tags = {};

  tags.forEach(function(tag){
    _tags[tag.id] = tag.name;
  });
}

module.exports = TagStore;
