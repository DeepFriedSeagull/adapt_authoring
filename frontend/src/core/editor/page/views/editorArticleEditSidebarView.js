define(function(require) {
    
    var Origin = require('coreJS/app/origin');
    var SidebarItemView = require('coreJS/sidebar/views/sidebarItemView');
    var Backbone = require('backbone');

    var EditorArticleEditSidebarView = SidebarItemView.extend({

        events: {
            'click .editor-article-edit-sidebar-save': 'saveEditing',
            'click .editor-article-edit-sidebar-cancel': 'cancelEditing'
        },

        postRender: function() {},

        saveEditing: function(event) {
            event.preventDefault();
            this.updateButton('.editor-article-edit-sidebar-save', window.polyglot.t('app.saving'));
            Origin.trigger('editorArticleEditSidebar:views:save');
        },

        cancelEditing: function(event) {
            event.preventDefault();
            Backbone.history.history.back();
            Origin.trigger('editingOverlay:views:hide');
        }

    }, {
        template: 'editorArticleEditSidebar'
    });

    return EditorArticleEditSidebarView;

});