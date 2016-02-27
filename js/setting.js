/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'kasaokashi_2015_ippan';
OpenSpending.year = '2015';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* yokohama cofog */
  '1':     { icon: 'icons/government-uk.svg',              color : '#C75746', b color : '#935B3B' },//議会費
  '1-1':   { icon: 'icons/government-uk.svg',              color : '#C75746', b color : '#935B3B' },//議会費
  '2':     { icon: 'icons/publicaffairs.svg',              color : '#C75746', b color : '#935B3B' },//総務費
  '2-1':   { icon: 'icons/government-uk.svg',              color : '#C75746', b color : '#935B3B' },//総務費
  '2-2':   { icon: 'icons/books.svg',                      color : '#C75746', b color : '#935B3B' },//総務費
  '2-3':   { icon: 'icons/money.svg',                      color : '#C75746', b color : '#935B3B' },//総務費
  '2-4':   { icon: 'icons/financial-admin.svg',            color : '#C75746', b color : '#935B3B' },//総務費
  '2-5':   { icon: 'icons/transport.svg',                  color : '#C75746', b color : '#935B3B' },//総務費
  '2-6':   { icon: 'icons/public-debt.svg',                color : '#C75746', b color : '#935B3B' },//総務費
  '2-7':   { icon: 'icons/worldmap.svg',                   color : '#C75746', b color : '#935B3B' },//総務費
  '2-8':   { icon: 'icons/economic-aid.svg',               color : '#C75746', b color : '#935B3B' },//総務費
  '2-9':   { icon: 'icons/dollars.svg',                    color : '#C75746', b color : '#935B3B' },//総務費
  '2-10':  { icon: 'icons/research.svg',                   color : '#C75746', b color : '#935B3B' },//総務費
  '3':     { icon: 'icons/family2.svg',                    color : '#C75746', b color : '#935B3B' },//民生費
  '3-1':   { icon: 'icons/publicaffairs.svg',              color : '#C75746', b color : '#935B3B' },//民生費
  '3-2':   { icon: 'icons/dollar.svg',                     color : '#C75746', b color : '#935B3B' },//民生費
  '3-3':   { icon: 'icons/helping-others.svg',             color : '#C75746', b color : '#935B3B' },//民生費
  '3-4':   { icon: 'icons/old-age.svg',                    color : '#C75746', b color : '#935B3B' },//民生費
  '3-5':   { icon: 'icons/hospital.svg',                   color : '#C75746', b color : '#935B3B' },//民生費
  '3-6':   { icon: 'icons/old-age.svg',                    color : '#C75746', b color : '#935B3B' },//民生費
  '3-7':   { icon: 'icons/schools.svg',                    color : '#C75746', b color : '#935B3B' },//民生費
  '3-8':   { icon: 'icons/pre-school.svg',                 color : '#C75746', b color : '#935B3B' },//民生費
  '3-9':   { icon: 'icons/secondary-lower.svg',            color : '#C75746', b color : '#935B3B' },//民生費
  '3-10':  { icon: 'icons/aid-developing-countries.svg',   color : '#C75746', b color : '#935B3B' },//民生費
  '3-11':  { icon: 'icons/aid-developing-countries.svg',   color : '#C75746', b color : '#935B3B' },//民生費
  '4':     { icon: 'icons/helping-others.svg',             color : '#C75746', b color : '#935B3B' },//衛生費
  '4-1':   { icon: 'icons/medical-supplies.svg',           color : '#C75746', b color : '#935B3B' },//衛生費
  '4-2':   { icon: 'icons/medical-supplies.svg',           color : '#C75746', b color : '#935B3B' },//衛生費
  '4-3':   { icon: 'icons/tree.svg',                       color : '#C75746', b color : '#935B3B' },//衛生費
  '4-4':   { icon: 'icons/pollution.svg',                  color : '#C75746', b color : '#935B3B' },//衛生費
  '4-5':   { icon: 'icons/hospital.svg',                   color : '#C75746', b color : '#935B3B' },//衛生費
  '4-6':   { icon: 'icons/ambulance.svg',                  color : '#C75746', b color : '#935B3B' },//衛生費
  '4-7':   { icon: 'icons/waste.svg',                      color : '#C75746', b color : '#935B3B' },//衛生費
  '4-8':   { icon: 'icons/waste.svg',                      color : '#C75746', b color : '#935B3B' },//衛生費
  '4-9':   { icon: 'icons/waste.svg',                      color : '#C75746', b color : '#935B3B' },//衛生費
  '4-10':  { icon: 'icons/toilet.svg',                     color : '#C75746', b color : '#935B3B' },//衛生費
  '5':     { icon: 'icons/labour.svg',                     color : '#C75746', b color : '#935B3B' },//労働費
  '5-1':   { icon: 'icons/other-medical.svg',              color : '#C75746', b color : '#935B3B' },//労働費
  '5-2':   { icon: 'icons/civilian-action.svg',            color : '#C75746', b color : '#935B3B' },//労働費
  '6':     { icon: 'icons/farms.svg',                      color : '#C75746', b color : '#935B3B' },//農林水産費
  '6-1':   { icon: 'icons/unemployment.svg',               color : '#C75746', b color : '#935B3B' },//農林水産費
  '6-2':   { icon: 'icons/money.svg',                      color : '#C75746', b color : '#935B3B' },//農林水産費
  '6-3':   { icon: 'icons/manufactoring-construction.svg', color : '#C75746', b color : '#935B3B' },//農林水産費
  '6-4':   { icon: 'icons/planning.svg',                   color : '#C75746', b color : '#935B3B' },//農林水産費
  '6-5':   { icon: 'icons/fishing.svg',                    color : '#C75746', b color : '#935B3B' },//農林水産費
  '6-6':   { icon: 'icons/police2.svg',                    color : '#C75746', b color : '#935B3B' },//農林水産費
  '6-7':   { icon: 'icons/construction.svg',               color : '#C75746', b color : '#935B3B' },//農林水産費
  '7':     { icon: 'icons/economic-aid.svg',               color : '#C75746', b color : '#935B3B' },//商工費
  '7-1':   { icon: 'icons/money.svg',                      color : '#C75746', b color : '#935B3B' },//商工費
  '7-2':   { icon: 'icons/manufactoring-construction.svg', color : '#C75746', b color : '#935B3B' },//商工費
  '7-3':   { icon: 'icons/economy-tourism.svg',            color : '#C75746', b color : '#935B3B' },//商工費
  '8':     { icon: 'icons/manufactoring-construction.svg', color : '#C75746', b color : '#935B3B' },//土木費
  '8-1':   { icon: 'icons/car.svg',                        color : '#C75746', b color : '#935B3B' },//土木費
  '8-2':   { icon: 'icons/car.svg',                        color : '#C75746', b color : '#935B3B' },//土木費
  '8-3':   { icon: 'icons/car.svg',                        color : '#C75746', b color : '#935B3B' },//土木費
  '8-4':   { icon: 'icons/construction.svg',               color : '#C75746', b color : '#935B3B' },//土木費
  '8-5':   { icon: 'icons/construction.svg',               color : '#C75746', b color : '#935B3B' },//土木費
  '8-6':   { icon: 'icons/island.svg',                     color : '#C75746', b color : '#935B3B' },//土木費
  '8-7':   { icon: 'icons/anchor.svg',                     color : '#C75746', b color : '#935B3B' },//土木費
  '8-8':   { icon: 'icons/anchor.svg',                     color : '#C75746', b color : '#935B3B' },//土木費
  '8-9':   { icon: 'icons/manufactoring-construction.svg', color : '#C75746', b color : '#935B3B' },//土木費
  '8-10':  { icon: 'icons/legislative.svg',                color : '#C75746', b color : '#935B3B' },//土木費
  '8-11':  { icon: 'icons/street-lights.svg',              color : '#C75746', b color : '#935B3B' },//土木費
  '8-12':  { icon: 'icons/toilet.svg',                     color : '#C75746', b color : '#935B3B' },//土木費
  '8-13':  { icon: 'icons/housing.svg',                    color : '#C75746', b color : '#935B3B' },//土木費
  '9':     { icon: 'icons/fire-brigade.svg',               color : '#C75746', b color : '#935B3B' },//消防費
  '9-1':   { icon: 'icons/rd-order-safety.svg',            color : '#C75746', b color : '#935B3B' },//消防費
  '9-2':   { icon: 'icons/financial-admin.svg',            color : '#C75746', b color : '#935B3B' },//消防費
  '9-3':   { icon: 'icons/planning.svg',                   color : '#C75746', b color : '#935B3B' },//消防費
  '10':    { icon: 'icons/education.svg',                  color : '#C75746', b color : '#935B3B' },//教育費
  '10-1':  { icon: 'icons/education.svg',                  color : '#C75746', b color : '#935B3B' },//教育費
  '10-2':  { icon: 'icons/primary.svg',                    color : '#C75746', b color : '#935B3B' },//教育費
  '10-3':  { icon: 'icons/pre-school.svg',                 color : '#C75746', b color : '#935B3B' },//教育費
  '10-4':  { icon: 'icons/legislative.svg',                color : '#C75746', b color : '#935B3B' },//教育費
  '10-5':  { icon: 'icons/civilian-action.svg',            color : '#C75746', b color : '#935B3B' },//教育費
  '10-6':  { icon: 'icons/civilian-action.svg',            color : '#C75746', b color : '#935B3B' },//教育費
  '10-7':  { icon: 'icons/books.svg',                      color : '#C75746', b color : '#935B3B' },//教育費
  '10-8':  { icon: 'icons/schools.svg',                    color : '#C75746', b color : '#935B3B' },//教育費
  '10-9':  { icon: 'icons/schools.svg',                    color : '#C75746', b color : '#935B3B' },//教育費
  '10-10': { icon: 'icons/ambulance.svg',                  color : '#C75746', b color : '#935B3B' },//教育費
  '10-11': { icon: 'icons/sports.svg',                     color : '#C75746', b color : '#935B3B' },//教育費
  '10-12': { icon: 'icons/pig.svg',                        color : '#C75746', b color : '#935B3B' },//教育費
  '11':    { icon: 'icons/aid-developing-countries.svg',   color : '#C75746', b color : '#935B3B' },//災害復旧費
  '12':    { icon: 'icons/money.svg',                      color : '#C75746', b color : '#935B3B' },//公債費
  '13':    { icon: 'icons/public-debt.svg',                color : '#C75746', b color : '#935B3B' },//諸支出金
  '14':    { icon: 'icons/financial-admin.svg',            color : '#C75746', b color : '#935B3B' }//予備費
};
