//***************************************************************************************
//
//! \file main.c 
//! This is an simple example show developer how to use dev api to print int number.
//!
//! \author    Cedar
//! \version   V1.0
//! \date      2014-03-23
//! \copyright GNU Public License V3.0
//
//***************************************************************************************

#include "dev.h"

#define CNT_MAX  10  //!< The maxium number of print

//! Simple device example.
void DEV_Example(void)
{
	int i = 0;

	Dev_Init();
	
	for (i = 0; i < CNT_MAX; ++i)
	{
		Dev_PrintInt(i);
	}

	Dev_Close();
}

//! Application Entry
int main(void)
{

	DEV_Example();

	return 0;
}

