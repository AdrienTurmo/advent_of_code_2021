import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { splitLines } from 'utils/Utils';

describe('<Day5 />', () => {
  interface Point {
    x: number;
    y: number;
  }

  interface Line {
    start: Point;
    end: Point;
  }

  it('should work', () => {
    const rawExampleInput = `
  0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2
`;
    const rawInput = `
414,379 -> 827,379
683,947 -> 183,947
156,577 -> 480,577
939,503 -> 939,959
388,907 -> 388,349
73,572 -> 539,106
530,157 -> 530,530
959,896 -> 123,60
416,698 -> 475,698
856,281 -> 856,943
658,767 -> 806,915
774,799 -> 252,799
763,833 -> 763,469
66,314 -> 359,314
47,984 -> 974,57
377,52 -> 377,739
168,935 -> 767,935
536,778 -> 354,778
222,919 -> 961,180
31,419 -> 31,390
475,232 -> 317,232
989,980 -> 989,855
825,237 -> 627,39
318,896 -> 413,801
208,57 -> 888,57
403,796 -> 104,796
923,937 -> 169,183
590,827 -> 903,514
846,416 -> 715,416
639,221 -> 280,221
337,554 -> 66,554
180,121 -> 867,808
369,402 -> 446,402
134,857 -> 980,11
978,957 -> 818,797
653,75 -> 817,75
503,391 -> 566,391
156,392 -> 766,392
484,231 -> 91,231
193,302 -> 193,947
535,145 -> 122,558
688,629 -> 688,584
661,85 -> 780,85
670,765 -> 670,32
53,892 -> 572,373
188,893 -> 937,893
957,127 -> 375,127
167,309 -> 167,460
918,611 -> 851,611
512,286 -> 710,484
878,434 -> 878,152
785,546 -> 41,546
468,278 -> 145,601
243,181 -> 916,854
499,734 -> 534,734
278,72 -> 278,242
739,672 -> 739,965
920,147 -> 165,147
809,232 -> 809,42
405,349 -> 405,178
742,228 -> 97,228
85,543 -> 85,454
32,181 -> 38,187
869,693 -> 869,822
971,444 -> 642,115
653,950 -> 325,622
648,174 -> 107,174
866,310 -> 866,409
951,145 -> 951,237
744,447 -> 774,417
881,570 -> 373,570
807,217 -> 572,217
813,554 -> 813,80
468,651 -> 468,67
672,989 -> 807,854
62,644 -> 897,644
340,263 -> 340,237
919,513 -> 919,489
178,272 -> 348,442
272,419 -> 420,419
561,188 -> 561,502
377,169 -> 392,184
19,240 -> 19,663
711,756 -> 140,756
389,404 -> 19,774
430,222 -> 639,222
591,676 -> 744,676
398,79 -> 149,79
952,658 -> 952,304
810,431 -> 364,877
867,133 -> 601,133
324,830 -> 578,830
711,817 -> 362,817
708,681 -> 708,982
644,282 -> 888,282
439,204 -> 102,204
900,34 -> 291,643
542,603 -> 638,603
962,933 -> 52,23
804,936 -> 949,936
580,542 -> 263,859
452,267 -> 70,267
342,877 -> 947,877
745,197 -> 745,905
837,135 -> 832,135
873,260 -> 310,823
415,51 -> 390,51
606,703 -> 471,838
968,753 -> 642,753
544,434 -> 198,88
923,21 -> 48,896
192,927 -> 192,863
899,88 -> 59,928
335,854 -> 923,266
925,375 -> 845,295
557,799 -> 227,799
515,863 -> 638,863
678,235 -> 946,503
635,582 -> 635,698
199,577 -> 334,712
880,503 -> 880,236
161,191 -> 883,913
261,211 -> 261,446
560,374 -> 961,775
321,278 -> 933,890
257,472 -> 694,909
909,828 -> 833,828
347,966 -> 347,256
446,326 -> 829,326
891,927 -> 18,54
43,392 -> 275,624
581,760 -> 19,760
715,308 -> 590,433
168,11 -> 168,827
934,29 -> 365,29
345,39 -> 56,39
136,924 -> 932,128
96,381 -> 490,381
52,794 -> 274,794
46,90 -> 839,883
806,156 -> 806,212
768,155 -> 84,839
987,189 -> 852,54
287,73 -> 287,950
393,579 -> 393,348
940,528 -> 794,528
822,66 -> 162,66
237,515 -> 143,421
531,396 -> 531,314
725,429 -> 725,281
547,217 -> 908,217
487,253 -> 487,125
611,662 -> 187,238
624,10 -> 49,585
891,186 -> 891,588
353,453 -> 580,453
48,283 -> 599,283
170,287 -> 100,357
208,825 -> 482,825
465,844 -> 465,667
811,587 -> 55,587
307,675 -> 103,675
687,707 -> 441,953
818,832 -> 824,826
291,855 -> 942,204
930,543 -> 930,966
516,285 -> 516,817
140,120 -> 934,914
799,835 -> 799,355
739,267 -> 237,267
951,937 -> 35,21
766,58 -> 61,763
840,573 -> 154,573
30,952 -> 966,16
425,152 -> 139,438
167,889 -> 397,659
948,646 -> 629,965
720,431 -> 174,431
760,758 -> 304,758
626,155 -> 902,431
529,459 -> 129,459
787,722 -> 38,722
247,951 -> 640,951
451,441 -> 522,441
244,509 -> 707,509
857,475 -> 852,470
855,126 -> 216,765
469,366 -> 36,799
46,348 -> 654,956
709,726 -> 709,970
542,684 -> 542,393
325,904 -> 793,436
705,53 -> 112,646
248,146 -> 248,141
244,912 -> 567,912
100,198 -> 838,936
124,929 -> 802,251
861,667 -> 576,382
258,369 -> 258,972
843,128 -> 435,128
60,174 -> 420,174
966,972 -> 171,972
79,737 -> 326,737
459,959 -> 711,959
360,936 -> 220,936
326,861 -> 694,493
593,108 -> 828,108
638,921 -> 638,460
661,363 -> 661,885
563,321 -> 385,321
391,662 -> 813,240
699,324 -> 774,399
686,268 -> 278,268
53,105 -> 929,981
191,853 -> 191,875
80,431 -> 164,431
658,847 -> 658,201
219,139 -> 880,139
481,14 -> 481,851
399,812 -> 399,782
816,335 -> 446,335
908,466 -> 927,466
207,752 -> 838,121
371,86 -> 371,38
382,975 -> 382,489
340,885 -> 791,434
748,230 -> 748,644
319,418 -> 925,418
825,146 -> 159,146
236,818 -> 186,818
543,715 -> 660,832
642,634 -> 142,134
774,229 -> 774,877
98,752 -> 98,834
622,840 -> 622,285
757,853 -> 270,366
877,741 -> 270,134
182,839 -> 905,116
937,278 -> 937,943
411,433 -> 411,585
57,492 -> 332,492
252,215 -> 252,930
11,149 -> 282,420
914,491 -> 914,300
722,623 -> 928,829
533,194 -> 694,194
303,251 -> 303,168
536,382 -> 536,578
259,92 -> 259,935
504,875 -> 504,351
797,923 -> 502,628
540,343 -> 678,205
877,874 -> 323,874
185,787 -> 882,90
735,582 -> 735,355
84,104 -> 910,930
731,14 -> 731,848
542,364 -> 542,371
552,141 -> 832,141
337,371 -> 616,371
609,328 -> 609,15
233,112 -> 505,112
557,248 -> 557,357
205,507 -> 205,93
46,27 -> 957,938
313,214 -> 656,214
884,893 -> 884,206
931,508 -> 931,965
535,667 -> 410,667
96,661 -> 96,82
617,952 -> 228,952
626,249 -> 626,772
649,400 -> 649,136
255,829 -> 345,829
351,210 -> 588,210
224,456 -> 224,86
318,393 -> 397,393
342,620 -> 839,123
180,81 -> 812,81
958,988 -> 31,61
876,127 -> 94,909
359,710 -> 359,161
419,437 -> 419,124
195,881 -> 803,273
802,56 -> 802,934
76,60 -> 349,60
126,862 -> 126,791
669,106 -> 196,579
550,191 -> 222,191
450,680 -> 450,887
953,55 -> 41,967
15,21 -> 965,971
771,829 -> 272,330
719,481 -> 719,743
951,875 -> 234,875
59,94 -> 944,979
120,175 -> 761,816
55,413 -> 55,693
483,426 -> 526,426
70,971 -> 929,112
219,53 -> 586,420
602,827 -> 602,983
836,641 -> 131,641
461,206 -> 461,466
15,614 -> 690,614
304,717 -> 262,717
229,603 -> 252,580
895,237 -> 221,911
495,308 -> 525,308
848,273 -> 965,156
587,11 -> 587,412
732,307 -> 601,307
698,726 -> 896,726
196,763 -> 196,277
19,43 -> 529,43
253,97 -> 152,97
958,98 -> 958,342
519,339 -> 571,339
367,83 -> 367,466
984,130 -> 984,310
374,806 -> 374,64
71,247 -> 773,949
890,602 -> 890,146
81,163 -> 81,834
357,683 -> 514,683
548,733 -> 638,733
795,887 -> 541,887
788,219 -> 591,22
144,788 -> 144,332
706,519 -> 706,241
681,281 -> 157,281
898,967 -> 18,87
467,84 -> 800,417
267,25 -> 267,813
287,282 -> 287,348
865,453 -> 865,923
772,779 -> 108,115
243,194 -> 309,194
152,716 -> 516,716
588,504 -> 588,443
820,298 -> 820,752
976,320 -> 620,676
888,453 -> 888,147
357,538 -> 640,538
755,118 -> 755,582
664,480 -> 499,480
578,265 -> 578,554
420,874 -> 108,874
357,604 -> 133,380
131,83 -> 970,922
256,50 -> 222,50
269,750 -> 942,750
248,594 -> 248,361
394,322 -> 251,322
346,383 -> 638,383
309,450 -> 309,872
819,882 -> 19,882
718,254 -> 718,710
828,31 -> 706,153
402,374 -> 402,841
27,362 -> 274,362
675,933 -> 675,54
810,634 -> 220,44
436,205 -> 436,752
165,41 -> 165,773
230,297 -> 230,342
503,275 -> 852,275
826,79 -> 87,79
556,411 -> 556,190
418,131 -> 687,400
260,493 -> 458,295
243,282 -> 673,712
501,78 -> 501,176
394,72 -> 394,650
621,636 -> 347,636
917,139 -> 114,942
708,873 -> 708,423
930,681 -> 312,63
94,209 -> 94,136
604,104 -> 159,104
291,740 -> 384,740
75,670 -> 798,670
837,620 -> 139,620
53,504 -> 53,373
832,660 -> 765,660
967,11 -> 52,926
188,885 -> 188,397
517,567 -> 706,567
539,177 -> 117,599
787,702 -> 314,702
618,863 -> 549,863
388,322 -> 65,322
495,19 -> 495,366
259,256 -> 259,497
618,358 -> 214,762
721,355 -> 569,203
817,184 -> 224,777
816,573 -> 816,376
866,181 -> 660,181
488,704 -> 488,325
144,233 -> 539,628
376,920 -> 705,920
957,478 -> 556,879
139,470 -> 139,364
360,174 -> 360,345
821,168 -> 970,19
580,972 -> 321,713
120,111 -> 536,527
408,555 -> 831,555
904,808 -> 843,869
663,114 -> 28,749
598,61 -> 598,74
433,907 -> 336,907
505,649 -> 644,510
28,30 -> 974,976
321,848 -> 641,848
616,68 -> 923,375
581,816 -> 703,816
912,473 -> 747,473
979,868 -> 182,868
536,339 -> 557,360
268,732 -> 236,732
906,964 -> 481,964
81,529 -> 81,495
640,820 -> 292,820
52,79 -> 52,695
745,610 -> 925,610
341,30 -> 292,30
338,629 -> 619,629
103,591 -> 103,527
178,211 -> 891,924
980,79 -> 319,740
163,164 -> 925,926
359,275 -> 359,974
12,987 -> 989,10
153,394 -> 280,394
920,741 -> 813,634
684,806 -> 459,581
288,670 -> 288,781
351,819 -> 317,819
583,920 -> 484,920
299,427 -> 217,427
140,295 -> 330,105
628,566 -> 628,256
419,701 -> 407,701
522,789 -> 185,789
845,683 -> 845,323
529,47 -> 340,47
953,982 -> 953,556
694,811 -> 226,343
752,251 -> 752,439
926,177 -> 121,982
420,263 -> 240,443
344,423 -> 884,963
636,674 -> 667,674
494,891 -> 903,482
159,900 -> 529,530
707,589 -> 800,682
437,317 -> 526,317
143,95 -> 425,377
710,191 -> 710,960
292,595 -> 292,803
539,689 -> 350,689
345,473 -> 418,473
395,79 -> 395,52
567,603 -> 312,348
866,790 -> 535,790
188,849 -> 958,79
90,283 -> 11,283
271,795 -> 789,795
336,729 -> 902,729
620,638 -> 105,638
626,523 -> 626,907
94,218 -> 741,865
194,169 -> 670,645
68,37 -> 68,416
624,771 -> 624,139
80,920 -> 80,707
624,829 -> 70,829
562,499 -> 768,499
656,821 -> 656,967
115,516 -> 115,693
300,871 -> 281,871
338,491 -> 30,799
775,54 -> 792,54
267,111 -> 485,111
411,981 -> 411,98
701,416 -> 944,416
498,885 -> 191,885
479,283 -> 724,283
62,695 -> 337,695
844,557 -> 844,969
937,980 -> 44,87
312,99 -> 939,726
19,988 -> 905,988
262,185 -> 262,26
367,369 -> 84,369
29,161 -> 845,977
105,30 -> 105,693
764,830 -> 91,157
`;

    const lines: Line[] = splitLines(rawInput)
      .map((value) => value.trim().split(/\D+/))
      .map((value) => value.map((nb) => Number.parseInt(nb)))
      .map((value) => ({
        start: { x: value[0], y: value[1] },
        end: { x: value[2], y: value[3] },
      }));

    const length = lines.length;
    const size = 1000;

    const logPoints = () => {
      let display = '';
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          display += ` ${allPoints[j][i]}`;
        }
        display += '\n';
      }
      console.log(display);
    };

    const allPoints: number[][] = new Array(size);
    for (let i = 0; i < size; i++) {
      allPoints[i] = new Array(size).fill(0);
    }

    lines.forEach((line) => {
      // console.log(length - index);
      const startX = line.start.x;
      const startY = line.start.y;
      const diffX = Math.abs(startX - line.end.x);
      const diffY = Math.abs(startY - line.end.y);
      const signX = Math.sign(line.end.x - startX);
      const signY = Math.sign(line.end.y - startY);

      for (let i = 0, j = 0; signX * i <= diffX && signY * j <= diffY; i += signX, j += signY) {
        allPoints[startX + i][startY + j]++;
      }
    });

    let count = 0;
    allPoints.forEach((line) => {
      line.forEach((value) => (value > 1 ? count++ : null));
    });
    console.log(count);
  });

});
