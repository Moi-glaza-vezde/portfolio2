import React from 'react';
import { DataJob } from '../dataJob/DtataJob';
import { S } from '../Information_Stylea';

type InformationItemPropsType = {
   title: string;
   workSchedule: string;
};
export const InformationItem: React.FC<InformationItemPropsType> = (
   props: InformationItemPropsType
) => {
   return (
      <S.InformationItem>
         <S.JobTitleWrapper>
            <S.JobTitle>{props.title}</S.JobTitle>
            <S.WorkType>{props.workSchedule}</S.WorkType>
         </S.JobTitleWrapper>
         <S.JobData>
            <DataJob
               iconId={'jobBuild'}
               text={'Dr. Rajkumar’s Learning App'}
               width={'12px'}
               height={'12px'}
               viewBox={'0 0 12 12'}
            />
            <DataJob
               iconId={'jobLocation'}
               text={'Bengaluru'}
               width={'12px'}
               height={'12px'}
               viewBox={'0 0 12 12'}
            />
            <DataJob
               iconId={'jobDate'}
               text={'Sep 2021 - Dec 2021'}
               width={'12px'}
               height={'12px'}
               viewBox={'0 0 12 12'}
            />
         </S.JobData>
      </S.InformationItem>
   );
};
