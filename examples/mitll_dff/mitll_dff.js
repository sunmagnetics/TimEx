******************************************
* Begin .SUBCKT model                    *
* spice-sdb ver 4.28.2007                *
*                                        *
* RSFQ generic cell for MITLL sfq5ee     *
* Seedling project under IARPA-BAA-14-03 *
* Authored 5 Nov 2015, CJ Fourie, SU     *
* Modified 1 March 2016, JA Delport, SU  *
* Modified 23 Aug 2016, CJ Fourie, SU    *
* Modified 16 Oct 2016, CJ Fourie, SU    *
*   (added DMP junction B2, optmized)    *
* Last mod 31 Jan 2018, CJ Fourie, SU    *
*   (added bias parameterization)        * 
******************************************
*$Parameters
*IT=633e-6
*$EndP
******************************************
* Variables
.PARAM bias=1.0
******************************************
*                  Set  Reset  Out
*$Ports         in_set in_reset out_out
.SUBCKT mitll_dff  19   25     23 
B1   1   2   jjmitll100 area=2.5 
B2   10  16  jjmitll100 area=2 
B3   16  24  jjmitll100 area=2 
B4   3   4   jjmitll100 area=2 
B5   14  3   jjmitll100 area=1.5 
B6   7   8   jjmitll100 area=2.5 
B7   5   6   jjmitll100 area=2.5 
IB1  0   20  pwl(0 0 5p {260uA*bias})
IB2  0   21  pwl(0 0 5p {96uA*bias})
IB3  0   22  pwl(0 0 5p {163uA*bias})
IB4  0   7   pwl(0 0 5p {154uA*bias})
L1   19  1   2p  
L2a  1   20  1p  
L2b  20  10  1.9p  
L3   16  21  1.5p  
L4   21  3   6p  
L5a  3   22  3p  
L5b  22  5   1p  
L6   5   23  2p  
L7   7   14  2.8p  
L8   25  7   2.2p  
Lp1  2   0   0.2p  
Lp3  24  0   0.2p  
Lp4  4   0   0.2p  
Lp6  8   0   0.2p  
Lp7  6   0   0.2p  
LRB1 12  2   1p  
LRB2 9   16  1p  
LRB3 15  24  1p  
LRB4 17  4   1p  
LRB5 13  3   1p  
LRB6 11  8   1p  
LRB7 18  6   1p  
RB1  1   12  3.88  
RB2  10  9   3.23  
RB3  16  15  4.85  
RB4  3   17  4.85  
RB5  14  13  6.46  
RB6  7   11  3.88  
RB7  5   18  3.88  
.model jjmitll100 jj(rtype=1, vg=2.8mV, cap=0.07pF, r0=160, rn=16, icrit=0.1mA)
.ends mitll_dff
*******************************
