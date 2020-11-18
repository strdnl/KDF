# KDF

KDF is a simple key derivation function for fun/demo purposes.

The code works in two parts.  An expand function (build) that takes an 8*32 bit key and expands it to 512kb, and a sieve function (asp) that "sieves" down the 512kb to a 512bit hash.

The expand function uses 1024 rounds.  Each round is essentially 4 NH hash functions.  The key is in 8 32 bit parts and can be viewed as two rows, row1: (0,1,2,3) & row2:(4,5,6,7).  The key parts of row two are multiplied by the round number plus their position in the row mod P. The purpose of this is to prevent symetry in rows (i.e. swapping 0 & 4) from creating the same output.

The rows are multipied (0*4, 1*5, etc) mod a prime 64 bit number (P).  These values accumulate mod P in order to make the final 64 bit hash for the round.  Each round starts on the previous round value (with the beginning round at 0).  Once completed the expand function has built a 1024 * 64bit array (EA) upon which the sieve function will then work.

The sieve function works a bit like a merkle/binary tree.  Each round takes the EA and makes another array half the size until the array is 8 64 bit hashes.  It does this by taking the first and last parts and multiplying them together mod P.  It then works inwards (on the second and second last parts, etc) until it is completed.  The prime differs slightly from the expand function (they are the largest two 64 bit numbers).

On testing

Non-extensive tests suggest that flipping any bit of the input will result in on average over 50% of the output bits changing.  Changing the sieve function to XOR instead of using prime modular multiplication is not an improvement.

Problems

1) There is a better solution to the expand functions use of key parts I'm sure. The idea is that any particular key will create completely unique (per key) expanded array. I beleive it can be mathematically proven for this function, but unfortunately not by me.  Note: It should be (relatively) trivial to expand a unique key to a larger unique key.

2) Naturally the sieve function creates collisions. The simplest being that any EA reversed will sieve to the same output.  Note that simply reversing a key obviously doesn't reverse the EA. 

3) The sieve fucntion will also create inevitable clashes due to the fact that a*b mod P is only unique for any given a & b < P.  More obviously, you cannot compress a large amount of data into a smaller amount of data without some clashing.  Any mathematical proof here seems more difficult as the expand function does not create all possible inputs for the sieve.  E.g. All possible key inputs cannot create every possible 1024 * 64 bit EAs.

4) By working backwards from an EA it should be possible to engineer a clash.  However from the output it doesn't seem feasible to get an EA (thus the input) for the reasons mentioned previously.

5) I'm neither a cryptographer, nor a mathematician. My "testing" extends no further than flipping bits of inputs to test the avalanche/cascade effect. 
