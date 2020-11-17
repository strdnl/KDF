# KDF

KDF is a simple key derivation function for fun/demo purposes.

The code works in two parts.  An expand function (build) that takes an 8*32 bit key and expands it to 512kb, and a sieve function (asp) that "sieves" down the 512kb to a 512bit hash.

The expand function uses 65536 rounds.  Each round is essentially 4 NH hash function.  The key is in 8 32 bit parts and can be viewed as two rows, row1: (o,1,2,3) & row2:(4,5,6,7).  The parts of row two are modulated to (unique per round, per row place) 31 bit numbers. The purpose of this is to prevent symetry in rows (i.e. swapping 0 & 4) from creating the same hash.

The rows are multipied (0*4, etc) mod a prime 64 bit number (P).  These values accumulate mod P in order to make the final 64 bit hash for the round.  Each round starts on the previous round value (with the beginning round at 0).  Once completed the expand function has built a 65536 64bit array (EA) upon which the sieve function will then work.

The sieve function works a bit like a merkle/binary tree.  Each round takes the EA and makes another array half the size until the array is 8 64 bit hashes.  It does this by taking the first and last parts and multiplying them together mod P.  It then works inwards (on the second and second last parts, etc) until it is completed.  The prime differs slightly from the expand function (they are the largest two 64 bit numbers).

Potential problems I can think of:

1) The mod (2**31) on row 2 of the key in the expand function is potentially problematic.  Although it seems better than not having any.  ESPECIALLY - the subtraction of numbers dependent on row and round number from the modulus is basically thrown together.

2) The addition in the expand functions accumulator could probably be changed to multiplication.

