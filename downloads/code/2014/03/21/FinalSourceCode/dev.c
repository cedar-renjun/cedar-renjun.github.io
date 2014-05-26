//***************************************************************************************
//
//! \file dev.c 
//! the implement of simple device.
//!
//! \author    Cedar
//! \version   V1.0
//! \date      2014-03-23
//! \copyright GNU Public License V3.0
//
//***************************************************************************************

//! Simple device status.
//! 
//! \warning This variable is designed for internal, user \b MUST \b NOT call it.
static int __DevStatus = 0

void Dev_Init(void)
{
	// Print debug information
	printf("Dev Initialize OK!\r\n");
}

int Dev_PrintInt(int number)
{
	printf("Print IntType number: %d\r\n", number);
}

int Dev_StatusCheck(void)
{
	return 	(__DevStatus);
}

void Dev_Close(void)
{
	printf("Dev Close OK!\r\n");
}
