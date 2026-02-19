"use client";

import { REVIEW_DATA, reviewColumn } from "../table/review-column";
import DataTableWrapper from "./data-table-wrapper";

const ReviewsTableWrapper = () => {
  return (
    <DataTableWrapper data={REVIEW_DATA} columns={reviewColumn}>
        <DataTableWrapper.HeaderWrapper>
            <DataTableWrapper.Title title="Reviews" />
            <DataTableWrapper.ActionWrapper>
                <DataTableWrapper.Search />
            </DataTableWrapper.ActionWrapper>
        </DataTableWrapper.HeaderWrapper>
        <DataTableWrapper.Content length={REVIEW_DATA.length}/>
    </DataTableWrapper>
  )
}

export default ReviewsTableWrapper;