package com.northline.vpn

import android.content.Intent
import android.net.VpnService
import android.os.ParcelFileDescriptor

class NorthlineVpnService : VpnService() {
    private var vpnInterface: ParcelFileDescriptor? = null

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        if (intent?.action == ACTION_STOP) {
            stopVpn()
            stopSelf()
            return START_NOT_STICKY
        }

        if (vpnInterface == null) {
            vpnInterface = Builder()
                .setSession("NORTHLINE")
                .setMtu(1280)
                .addAddress("10.8.0.2", 32)
                .addRoute("0.0.0.0", 0)
                .addDnsServer("1.1.1.1")
                .establish()
        }

        return START_STICKY
    }

    override fun onDestroy() {
        stopVpn()
        super.onDestroy()
    }

    private fun stopVpn() {
        vpnInterface?.close()
        vpnInterface = null
    }

    companion object {
        const val ACTION_STOP = "com.northline.vpn.STOP"
    }
}
