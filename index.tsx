
/**
 * Veloura - Interactive script for model viewer tabs and footer year.
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 3D Model Viewer Tab Logic ---
  const viewerTabsContainer = document.querySelector('.viewer-tabs');
  const modelViewers = document.querySelectorAll<HTMLElement>('.viewer-wrap model-viewer');
  const tabs = document.querySelectorAll<HTMLButtonElement>('.viewer-tabs .tab');

  if (viewerTabsContainer && modelViewers.length > 0 && tabs.length > 0) {
    viewerTabsContainer.addEventListener('click', (event) => {
      const clickedTab = (event.target as HTMLElement).closest('.tab');
      if (!clickedTab) return;

      const targetModelId = `mv-${clickedTab.getAttribute('data-target')}`;

      // Update tab active state
      tabs.forEach(tab => {
        tab.classList.remove('active');
        tab.setAttribute('aria-pressed', 'false');
      });
      clickedTab.classList.add('active');
      clickedTab.setAttribute('aria-pressed', 'true');

      // Update model viewer visibility
      modelViewers.forEach(viewer => {
        if (viewer.id === targetModelId) {
          viewer.classList.remove('hidden');
        } else {
          viewer.classList.add('hidden');
        }
      });
    });
  }

  // --- Footer Year Logic ---
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }
});
