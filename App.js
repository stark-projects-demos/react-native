import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <Image
              source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642c3a0dc2a49420b5205e78_Vectors-Wrapper.svg'}}
              style={styles.logoImage}
            />
            <Text style={styles.logoText}>TeamSync</Text>
          </View>
          <View style={styles.menuItems}>
            <TouchableOpacity>
              <Text style={styles.menuLink}>Resources</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.menuLink}>Enterprise</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.menuLink}>Features</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.menuLink}>Articles</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity>
              <Text style={styles.loginLink}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Request a demo</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Hero Section */}
        <View style={styles.hero}>
          <Image
            source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d86886e0fd8482a47d321_Image-1.png'}}
            style={styles.heroImage}
          />
          <View style={styles.heroContent}>
            <View style={styles.headline}>
              <Text style={styles.heading}>Supercharge Team Work</Text>
              <Text style={styles.body}>
                With our project management, communication, and file sharing
                tools, you can work together seamlessly from anywhere in the
                world.
              </Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Try TeamSync</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button2}>
                <Text style={styles.buttonText}>Request a demo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Value Prop 1 */}
        <View style={styles.valuePropsection}>
          <Image
            source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8710706a641fa29d6e9c_Illustration-1.png'}}
            style={styles.illustration}
          />
          <View style={styles.content}>
            <Text style={styles.heading2}>
              Streamline your work processes &amp; boost productivity
            </Text>
            <Text style={styles.body}>
              With features like project management, task delegation,
              collaboration, and real-time notifications, you'll have everything
              you need to stay on top of your work.
            </Text>
          </View>
        </View>

        {/* Value Prop 2 */}
        <View style={styles.valueProp2Section}>
          <View style={styles.content}>
            <Text style={styles.heading2}>Access to your team on the go</Text>
            <Text style={styles.body}>
              Communicate in real-time with team members through our chat, video,
              and voice call features. Keep everyone up-to-date on project
              progress and updates.
            </Text>
          </View>
          <Image
            source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8807395e19c98865b100_Illustration-1-1.png'}}
            style={styles.phoneIllustration}
          />
        </View>

        {/* Pricing Section */}
        <View style={styles.pricingSection}>
          <View style={styles.pricingHeadline}>
            <Text style={styles.heading3}>Pricing</Text>
            <Text style={styles.body3}>
              Find a plan that fits all of your needs and more.
            </Text>
          </View>
          <View style={styles.pricingCards}>
            {/* Enterprise Card 1 */}
            <View style={styles.pricingCard}>
              <View style={styles.tierName}>
                <Text style={styles.tierTitle}>Enterprise</Text>
                <Text style={styles.tierPrice}>Reach out</Text>
              </View>
              <View style={styles.bullets}>
                <View style={styles.bulletRow}>
                  <Image
                    source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg'}}
                    style={styles.bulletIcon}
                  />
                  <Text style={styles.feature}>Access to all of Pro features</Text>
                </View>
                <View style={styles.bulletRow}>
                  <Image
                    source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg'}}
                    style={styles.bulletIcon}
                  />
                  <Text style={styles.feature}>Premium support</Text>
                </View>
                <View style={styles.bulletRow}>
                  <Image
                    source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg'}}
                    style={styles.bulletIcon}
                  />
                  <Text style={styles.feature}>
                    Access to early bird feature releases
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.button3}>
                <Text style={styles.buttonText}>Download</Text>
              </TouchableOpacity>
            </View>

            {/* Pro Card */}
            <View style={styles.pricingCard}>
              <View style={styles.tierName}>
                <Text style={styles.tierTitle}>Enterprise</Text>
                <Text style={styles.tierPrice}>Reach out</Text>
              </View>
              <View style={styles.bullets}>
                <View style={styles.bulletRow}>
                  <Image
                    source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg'}}
                    style={styles.bulletIcon}
                  />
                  <Text style={styles.feature}>Limited to 10 teammates</Text>
                </View>
                <View style={styles.bulletRow}>
                  <Image
                    source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg'}}
                    style={styles.bulletIcon}
                  />
                  <Text style={styles.feature}>Unlimited teams</Text>
                </View>
                <View style={styles.bulletRow}>
                  <Image
                    source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg'}}
                    style={styles.bulletIcon}
                  />
                  <Text style={styles.feature}>Unlimited storage space</Text>
                </View>
                <View style={styles.bulletRow}>
                  <Image
                    source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg'}}
                    style={styles.bulletIcon}
                  />
                  <Text style={styles.feature}>Customized integrations</Text>
                </View>
                <View style={styles.bulletRow}>
                  <Image
                    source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg'}}
                    style={styles.bulletIcon}
                  />
                  <Text style={styles.feature}>Access to advanced analytics</Text>
                </View>
                <View style={styles.bulletRow}>
                  <Image
                    source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg'}}
                    style={styles.bulletIcon}
                  />
                  <Text style={styles.feature}>Access to beta features</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.button4}>
                <Text style={styles.buttonText}>Subscribe for $20/month</Text>
              </TouchableOpacity>
            </View>

            {/* Enterprise Card 2 */}
            <View style={styles.pricingCard}>
              <View style={styles.tierName}>
                <Text style={styles.tierTitle}>Enterprise</Text>
                <Text style={styles.tierPrice}>Reach out</Text>
              </View>
              <View style={styles.bullets}>
                <View style={styles.bulletRow}>
                  <Image
                    source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg'}}
                    style={styles.bulletIcon}
                  />
                  <Text style={styles.feature}>Access to all of Pro features</Text>
                </View>
                <View style={styles.bulletRow}>
                  <Image
                    source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg'}}
                    style={styles.bulletIcon}
                  />
                  <Text style={styles.feature}>Premium support</Text>
                </View>
                <View style={styles.bulletRow}>
                  <Image
                    source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg'}}
                    style={styles.bulletIcon}
                  />
                  <Text style={styles.feature}>
                    Access to early bird feature releases
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.button3}>
                <Text style={styles.buttonText}>Reach out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Value Prop 3 */}
        <View style={styles.valueProp3Section}>
          <Image
            source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8a463370c853bc38e3d7_Illustration-2-1.png'}}
            style={styles.illustration3}
          />
          <View style={styles.content}>
            <Text style={styles.heading2}>
              Easily manage workflows for projects of any size
            </Text>
            <Text style={styles.body}>
              Stay organized and on track with our powerful project management
              tools. Assign tasks, set deadlines, and track progress in real-time.
            </Text>
          </View>
        </View>

        {/* Articles Section */}
        <View style={styles.articlesSection}>
          <Text style={styles.articlesHeadline}>Latest articles</Text>
          <View style={styles.articlesList}>
            {/* Article 1 */}
            <View style={styles.article}>
              <Image
                source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8ad63cfd70a55e5a9663_Image.png'}}
                style={styles.articleImage}
              />
              <View style={styles.articleContent}>
                <View style={styles.articleCopy}>
                  <View style={styles.articleHeadline}>
                    <Text style={styles.articleCategory}>Time managament</Text>
                    <Text style={styles.articleDate}>Jan 22, 2023</Text>
                  </View>
                  <Text style={styles.articleBody}>
                    Mastering time management: Tips and strategies for a more...
                  </Text>
                </View>
                <View style={styles.author}>
                  <Image
                    source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8ad7cbe8b7e2852ec2ee_Ellipse-10.png'}}
                    style={styles.authorImage}
                  />
                  <Text style={styles.authorName}>Kate Vesa</Text>
                </View>
              </View>
            </View>

            {/* Article 2 */}
            <View style={styles.article}>
              <Image
                source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8ad8ae3cee8e90db4445_Image.png'}}
                style={styles.articleImage}
              />
              <View style={styles.articleContent}>
                <View style={styles.articleCopy}>
                  <View style={styles.articleHeadline}>
                    <Text style={styles.articleCategory}>Collaboration</Text>
                    <Text style={styles.articleDate}>Feb 10, 2023</Text>
                  </View>
                  <Text style={styles.articleBody}>
                    The Power of Collaboration: Why Working Together is Key to
                    Success...
                  </Text>
                </View>
                <View style={styles.author}>
                  <Image
                    source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8ad99e34f96204bec944_Ellipse-10.png'}}
                    style={styles.authorImage}
                  />
                  <Text style={styles.authorName}>Tony Wilson</Text>
                </View>
              </View>
            </View>

            {/* Article 3 */}
            <View style={styles.article}>
              <Image
                source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8adacf44064d6fda226a_Image.png'}}
                style={styles.articleImage}
              />
              <View style={styles.articleContent}>
                <View style={styles.articleCopy}>
                  <View style={styles.articleHeadline}>
                    <Text style={styles.articleCategory}>Meetings</Text>
                    <Text style={styles.articleDate}>March 1, 2023</Text>
                  </View>
                  <Text style={styles.articleBody}>
                    Maximizing Productivity: How to Make Your Meetings More
                    Effective...
                  </Text>
                </View>
                <View style={styles.author}>
                  <Image
                    source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8adbae3cee85d1db4446_Ellipse-10.png'}}
                    style={styles.authorImage}
                  />
                  <Text style={styles.authorName}>Rita Verna</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Value Prop 4 */}
        <View style={styles.valueProp4Section}>
          <View style={styles.content}>
            <Text style={styles.heading2}>Stay on track and never miss a beat</Text>
            <Text style={styles.body}>
              Get instant alerts and notifications about upcoming deadlines. Our
              chat feature allows you to quickly communicate with your team and
              get the support you need to meet all project requirements.
            </Text>
          </View>
          <Image
            source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8b39395e193e8d682919_Illustration-3-1.png'}}
            style={styles.illustration4}
          />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.footerTop}>
              <Text style={styles.footerLogo}>TeamSync</Text>
              <View style={styles.socialIcons}>
                <Image
                  source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642dc4ca18ccd95fae059c22_Vectors-Wrapper.svg'}}
                  style={styles.socialIcon}
                />
                <Image
                  source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642dc4cb558a0c66d611e182_Vectors-Wrapper.svg'}}
                  style={styles.socialIcon}
                />
                <Image
                  source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642dc4ccc3503bd0b5e70831_Vectors-Wrapper.svg'}}
                  style={styles.socialIcon}
                />
                <Image
                  source={{uri: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642dc4cc962ed90d4b8a8cf8_Vectors-Wrapper.svg'}}
                  style={styles.socialIcon}
                />
              </View>
            </View>
            <View style={styles.footerLinks}>
              <View style={styles.footerColumn}>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Features</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Resources</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Articles</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.footerColumn}>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>FAQs</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Blogs</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Support</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.footerColumn}>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Careers</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Terms of Service</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Privacy Policy</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 51,
    height: 37,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#333',
  },
  menuItems: {
    flexDirection: 'row',
    gap: 20,
  },
  menuLink: {
    fontSize: 14,
    color: '#333',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  loginLink: {
    fontSize: 14,
    color: '#333',
  },
  button: {
    backgroundColor: '#6366f1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  button2: {
    backgroundColor: '#8b5cf6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  button3: {
    backgroundColor: '#6366f1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 16,
  },
  button4: {
    backgroundColor: '#8b5cf6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  hero: {
    padding: 24,
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  heroContent: {
    marginTop: 24,
    alignItems: 'center',
  },
  headline: {
    alignItems: 'center',
    marginBottom: 24,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
  },
  valuePropsection: {
    padding: 24,
    alignItems: 'center',
  },
  illustration: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
  content: {
    marginTop: 16,
  },
  heading2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  valueProp2Section: {
    padding: 24,
    alignItems: 'center',
  },
  phoneIllustration: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
  },
  pricingSection: {
    padding: 24,
    backgroundColor: '#f9fafb',
  },
  pricingHeadline: {
    alignItems: 'center',
    marginBottom: 24,
  },
  heading3: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  body3: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  pricingCards: {
    gap: 16,
  },
  pricingCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
  },
  tierName: {
    marginBottom: 16,
  },
  tierTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  tierPrice: {
    fontSize: 16,
    color: '#666',
  },
  bullets: {
    gap: 12,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  bulletIcon: {
    width: 8,
    height: 8,
  },
  feature: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  valueProp3Section: {
    padding: 24,
    alignItems: 'center',
  },
  illustration3: {
    width: '100%',
    height: 280,
    resizeMode: 'contain',
  },
  articlesSection: {
    padding: 24,
  },
  articlesHeadline: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
    textAlign: 'center',
  },
  articlesList: {
    gap: 20,
  },
  article: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  articleImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  articleContent: {
    padding: 16,
  },
  articleCopy: {
    marginBottom: 16,
  },
  articleHeadline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  articleCategory: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  articleDate: {
    fontSize: 12,
    color: '#999',
  },
  articleBody: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  authorImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  authorName: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  valueProp4Section: {
    padding: 24,
    alignItems: 'center',
  },
  illustration4: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
  footer: {
    backgroundColor: '#1f2937',
    padding: 24,
  },
  footerContent: {
    gap: 24,
  },
  footerTop: {
    alignItems: 'center',
    gap: 16,
  },
  footerLogo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  socialIcon: {
    width: 29,
    height: 29,
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
  },
  footerColumn: {
    gap: 12,
  },
  footerLink: {
    fontSize: 14,
    color: '#d1d5db',
  },
});

export default App;
