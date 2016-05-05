// Saves options to chrome.storage
function save_options() {
  var BetterGFMotesDebugMode = document.getElementById('debugModeToggle').checked;
  chrome.storage.sync.set({
    BetterGFMotesDebugMode: BetterGFMotesDebugMode
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Saved!';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    BetterGFMotesDebugMode: false
  }, function(items) {
    document.getElementById('debugModeToggle').checked = items.BetterGFMotesDebugMode;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);