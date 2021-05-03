import Vue from 'vue';

Vue.filter('formatDate', (dateString) =>
    new Date(dateString).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})
);