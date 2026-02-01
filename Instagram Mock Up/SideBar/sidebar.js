/**
 * Sidebar interaction initializer
 * - sidebar.html 이 DOM에 삽입된 이후에 반드시 호출해야 함
 */
function initSidebar() {
  const sidebar = document.getElementById("igSidebar");
  if (!sidebar) return;

  const moreBtn = document.getElementById("moreBtn");
  const morePopover = document.getElementById("morePopover");

  const metaBtn = document.getElementById("metaBtn");
  const metaPopover = document.getElementById("metaPopover");

  // 안전 장치 (HTML 일부가 없을 수 있는 페이지 대비)
  if (!moreBtn || !morePopover || !metaBtn || !metaPopover) return;

  // ===== 사이드바 확장 / 축소 =====
  const EXPAND_TRIGGER_PX = 110;
  const COLLAPSE_TRIGGER_PX = 260;

  window.addEventListener("mousemove", (e) => {
    const x = e.clientX;

    // 펼치기
    if (!sidebar.classList.contains("is-expanded") && x <= EXPAND_TRIGGER_PX) {
      sidebar.classList.add("is-expanded");
      return;
    }

    // 접기
    if (sidebar.classList.contains("is-expanded") && x >= COLLAPSE_TRIGGER_PX) {
      const hoveringSidebar = sidebar.matches(":hover");
      if (!hoveringSidebar) {
        sidebar.classList.remove("is-expanded");
      }
    }
  });

  sidebar.addEventListener("mouseenter", () => {
    sidebar.classList.add("is-expanded");
  });

  sidebar.addEventListener("mouseleave", (e) => {
    if (e.clientX >= COLLAPSE_TRIGGER_PX) {
      sidebar.classList.remove("is-expanded");
    }
  });

  // ===== 더 보기 팝오버 =====
  moreBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    metaPopover.classList.remove("active");
    morePopover.classList.toggle("active");
  });

  morePopover.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // ===== Meta 앱 팝오버 =====
  metaBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    morePopover.classList.remove("active");
    metaPopover.classList.toggle("active");
  });

  metaPopover.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // ===== 바깥 클릭 시 모든 팝오버 닫기 =====
  document.addEventListener("click", () => {
    morePopover.classList.remove("active");
    metaPopover.classList.remove("active");
  });



  // 모달 토글 코드
  const sidebarAlarm = document.querySelector('.nav-alarm');
  const closeModal = document.querySelector('#alarm-modal-close');
  const alarmModal = document.querySelector('#alarm-modal');
  sidebarAlarm.addEventListener('click', (e) => {
    e.stopPropagation();

    alarmModal.classList.add('show');
    alarmModal.scrollTop = 0;
  })
  closeModal.addEventListener('click', () => {
    alarmModal.classList.remove('show');
  })
  // 모달 밖 클릭 시 닫힘
  document.addEventListener('click', (e) => {
    if (
      alarmModal.classList.contains('show') &&
      !alarmModal.contains(e.target)
    ) {
      alarmModal.classList.remove('show');
    }
  });
  // 모달 ESC 닫기
  document.addEventListener(
    'keydown',
    (e) => {
      if (e.key !== 'Escape') return;
  
      if (!alarmModal.classList.contains('show')) return;
  
      e.preventDefault();
      e.stopPropagation();
  
      alarmModal.classList.remove('show');
    },
    true
  );
}
