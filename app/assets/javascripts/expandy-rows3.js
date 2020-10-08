(function() {
    var expandyRowTriggers = document.querySelectorAll('.expandy-row-trigger3');
  
    function toggleRow(row) {
      if (!row.nextElementSibling.classList.contains('hide-row')) {
          closeRow(row)
      } else {
          openRow(row)
      }
    }
  
    function closeRow(row) {
      row.nextElementSibling.classList.add('hide-row')
      row.classList.remove('open')
      row.querySelector('.expandy-row-trigger3').textContent = "Details ▼"
    }
  
    function openRow(row) {
      row.nextElementSibling.classList.remove('hide-row')
      row.classList.add('open')
      row.querySelector('.expandy-row-trigger3').textContent = 'Details ▲'
    }
  
    [].forEach.call(expandyRowTriggers, function(item) {
      var currentRow = item.parentNode.parentNode
  
      item.addEventListener('click', function(e) {
        e.preventDefault()
        e.stopPropagation()
  
        toggleRow(currentRow)
      })
  
      currentRow.addEventListener('click', function() {
        toggleRow(item.parentNode.parentNode)
      })
    })
  
    var allRowsOpen = false
    var expandyAllLink = document.querySelector('.expandyAll')
    expandyAllLink.addEventListener('click', function(e) {
      e.preventDefault();
  
      [].forEach.call(document.querySelectorAll('.expandy-row'), function(row) {
        if (allRowsOpen) {
            closeRow(row.previousElementSibling)
            expandyAllLink.textContent = 'View details'
        } else {
            openRow(row.previousElementSibling)
            expandyAllLink.textContent = 'Close all'
        }
      })
  
      allRowsOpen = !allRowsOpen
    })
  })()
  