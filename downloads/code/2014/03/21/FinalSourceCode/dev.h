//***************************************************************************************
//
//! \file dev.h
//!  Simple device user API.
//!
//! \author    Cedar
//! \version   V1.0
//! \date      2014-03-23
//! \copyright GNU Public License V3.0
//
//***************************************************************************************

#include <stdio.h>


//***************************************************************************************
//
//! \addtogroup Dev_Status  Simple device status information.
//! @{
//
//***************************************************************************************

#define DEV_ON      ((int)(1))      //!< Simple device is power on.
#define DEV_OFF     ((int)(0))      //!< Simple device is power off.

//***************************************************************************************
//
//! @}
//
//***************************************************************************************


//***************************************************************************************
//
//! \addtogroup Dev_API  Simple device APIs list.
//! @{
//
//***************************************************************************************

//***************************************************************************************
//
//! \brief  Initialize simple device.
//!
//! \param  none.
//! \retval none.
//!
//! \note   This function \b MUST be called first before others function.
//
//***************************************************************************************
extern void Dev_Init(void);

//***************************************************************************************
//
//! \brief  Print Int number to terimal device.
//!
//! \param  [in] number is the data you want to print.
//! \retval the number of print information, in bytes. return zero indicate print error !.
//!
//! \note
//! * Be sure you have called \ref Dev_Init function before call this fuction.
//! * Remember to check return value.
//
//***************************************************************************************
extern int Dev_PrintInt(int number);

//***************************************************************************************
//
//! \brief  Check simple device status information.
//!
//! \param  none.
//! \retval status information of simple device, which can be one of the following value:\n
//!  - \ref DEV_ON
//!  - \ref DEV_OFF
//!  \n More information, please reference \ref Dev_Status.
//
//***************************************************************************************
extern int Dev_StatusCheck(void);

//***************************************************************************************
//
//! \brief  Close simple device.
//!
//! \param  none.
//! \retval none.
//
//***************************************************************************************
extern void Dev_Close(void);

//***************************************************************************************
//
//! @}
//
//***************************************************************************************

//***************************************************************************************
//
//! \example main.c
//!  Show how to use simple device to print int number.
//
//***************************************************************************************
