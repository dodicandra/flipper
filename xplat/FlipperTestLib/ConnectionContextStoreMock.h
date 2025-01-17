/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <Flipper/ConnectionContextStore.h>

namespace facebook {
namespace flipper {
namespace test {

class ConnectionContextStoreMock : public ConnectionContextStore {
 public:
  ConnectionContextStoreMock() : ConnectionContextStore(DeviceData()) {}
  bool hasRequiredFiles() {
    return true;
  }
  std::string createCertificateSigningRequest() {
    return "thisIsACsr";
  }
  std::shared_ptr<folly::SSLContext> getSSLContext() {
    return nullptr;
  }
  folly::dynamic getConnectionConfig() {
    return nullptr;
  }
  std::string getCertificateDirectoryPath() {
    return "/something/sonar/";
  }
};

} // namespace test
} // namespace flipper
} // namespace facebook
