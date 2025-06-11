import View from './view.js';
import icons from '../../img/icons.svg?url';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
      `;
    }

    // Other page
    if (curPage < numPages) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }

    // Page 1, and there are NO other pages
    return '';
  }

  // _generateMarkup() {

  //   const curPage = this._data.page;
  //   const numPages = Math.ceil(
  //     this._data.results.length / this._data.resultsPerPage
  //   );

  //   // Debugging logs
  //   console.log(`Current: ${curPage}, Total: ${numPages}`);

  //   // Page 1 + more pages → Next button
  //   if (curPage === 1 && numPages > 1) {
  //     return `<button data-goto="${
  //       curPage + 1
  //     }" class="btn--inline pagination__btn--next">
  //     <span>Page ${curPage + 1}</span>
  //     <svg class="search__icon">
  //       <use href="${icons}#icon-arrow-right"></use>
  //     </svg>
  //   </button>`;
  //   }

  //   // Last page → Prev button
  //   if (curPage === numPages && numPages > 1) {
  //     return `<button data-goto="${
  //       curPage - 1
  //     }" class="btn--inline pagination__btn--prev">
  //     <svg class="search__icon">
  //       <use href="${icons}#icon-arrow-left"></use>
  //     </svg>
  //     <span>Page ${curPage - 1}</span>
  //   </button>`;
  //   }

  //   // Middle pages → Both buttons
  //   if (curPage < numPages) {
  //     return `
  //     <button data-goto="${
  //       curPage - 1
  //     }" class="btn--inline pagination__btn--prev">
  //       <svg class="search__icon">
  //         <use href="${icons}#icon-arrow-left"></use>
  //       </svg>
  //       <span>Page ${curPage - 1}</span>
  //     </button>
  //     <button data-goto="${
  //       curPage + 1
  //     }" class="btn--inline pagination__btn--next">
  //       <span>Page ${curPage + 1}</span>
  //       <svg class="search__icon">
  //         <use href="${icons}#icon-arrow-right"></use>
  //       </svg>
  //     </button>`;
  //   }

  //   // No buttons (only 1 page)
  //   return '';
  // }
}

export default new PaginationView();
