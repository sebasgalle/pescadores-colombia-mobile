package co.spinnerlabs.pescadorescolombia;

import org.apache.cordova.DroidGap;
import android.os.Bundle;

public class HomeActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/html/index.html");
    }
}
