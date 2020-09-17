import React from 'react';

import { CssBaseline } from '@material-ui/core';

const PromotionReviewForm = () => {

  return(
    <React.Fragment>
      <CssBaseline />
      <div>
      1. 프로모션 종류: 사전판매 | 할인 | 홍보
      2. 노출범위 선택 (모바일 디바이스-명수선택 | WEB  Main화면 노출)
      3. 노출대상 선택 - 선택범위에 따라 예상되는 비용을 함께 보여줌
         - 고객범위 (사람명수, 지역)
         - 추천보기 (AI 분석으로 주변고객 분석 결과를 알려줌)
    </div>
    </React.Fragment>
  );
}

export default PromotionReviewForm;